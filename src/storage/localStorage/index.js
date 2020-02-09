/*
 * LocalStorage.js v1.0.0
 * Anthor  Shu Fei
 * update Date:2020-02-07
 */

/**
 * 构造函数 LocalStorage
 * @param name 需要创建并管理的 根localStorage 对象的 键名
 */

function LocalStorage(name,isDestroy) {
    if(!name){
        console.warn(`【localStorage】:localStorage-root-key "[${name}]" is required`)
    }else{
        this.init(name)
    } 
}
/**
 * 初始化 init
 * 内部执行函数
 */
LocalStorage.prototype.init = function(name) {
    if(this.is(name)){
        localStorage.removeItem(name)
    }
    this.name = name
    this.data = {}
    //初始化 默认值为一个空对象
    localStorage.setItem(this.name, JSON.stringify(this.data))
}
/**
 * 多个实例的时候，用来检测新建的实例 根localStorage 对象的 键名 是否已经存在
 * @return { Boolean } true : 已经存在 false：不存在
 */
LocalStorage.prototype.is = function(name) {
    return localStorage[name] !== undefined
}
/**
 * type 严格类型校验
 * @return { String }
 */
LocalStorage.prototype.type = function(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}
/**
add 增
 * set函数： 对 【根localStorage 对象】进行添加属性操作
 * @param arguments[0] 添加到 【根localStorage 对象】身上的属性
 * @param arguments[1] 添加到 【根localStorage 对象】身上的属性key对应的值
 */
LocalStorage.prototype.set = function() {
    if(!this.is(this.name))return;
    //设置的键值对 会 被添加到根对象 上
    if(arguments.length===1 && arguments[0]!==null && typeof arguments[0] === 'object'){
        for(let k in arguments[0]){
            this.data[k] = arguments[0][k]
        }
    }else if(arguments.length===2 && typeof arguments[0] === 'string'){
        this.data[arguments[0]] = arguments[1]
    }
    localStorage.setItem(this.name, JSON.stringify(this.data)) 
}
/**
edit 改
 * edit函数： 
 * @param args 参数集合，除了最后一个是需要改变的值，之前的参数都是 对象 key 的深度
 */
LocalStorage.prototype.edit = function(...args) {
    if(!this.is(this.name))return;
    var setAttrEvent = new Event("setAttrEvent");
    setAttrEvent.beforeUpdated = JSON.parse(JSON.stringify(this.data));
    let keys = args.slice(0, args.length - 1)
    let val = args[args.length - 1]
    let temp = this.data
    for (let i = 0; i < keys.length; i++) {
        if (temp.hasOwnProperty(keys[i])) {
            if (i == keys.length - 1) {
                temp[keys[i]] = val
            } else {
                temp = temp[keys[i]]
            }
        }
    }
    setAttrEvent.updated = this.data;
    localStorage.setItem(this.name, JSON.stringify(this.data))
    window.dispatchEvent(setAttrEvent);
}
/**
 * get函数：
 * 获取 【根localStorage 对象】身上的键值
 * @param keys 动态参数
 * @return { any } 返回key对应的值
 */
LocalStorage.prototype.get = function(...keys) {
    if(!this.is(this.name))return;
    //根据传入的参数个数 确定 获取的是几级key
    let result = null
    for (let i = 0; i < keys.length; i++) {
        if (i == 0) {
            if (!this.data[keys[i]]) {
                throw Error(keys[i] + '不存在')
            }
        } else {
            if (!result.hasOwnProperty(keys[i])) {
                throw Error(keys[i - 1] + '对象下面不存在key：' + keys[i])
            }
        }
        if (i == 0 && this.type(this.data[keys[i]]) === 'object') {
            result = this.data[keys[i]]
        } else {
            if(i == 0 ){
                result = this.data[keys[i]]
            }else{
                result = result[keys[i]]
                if (!result) {
                    throw Error(keys[i] + '键对应的值不是一个对象')
                }
                if (this.type(result) === 'array') {
                    throw Error(keys[i] + '键对应的值不是一个对象')
                }
            } 
        }
    }
    return result
}
/**
 * del函数：
 * 删除 【根localStorage 对象】身上的键值
 * @param keys 需要删除的参数集合的最后一个
 * 默认 删除是传入参数的最后一个，之前key的个数为key的深度
 */
LocalStorage.prototype.del = function(...keys) {
    if(!this.is(this.name))return;
    var removeItemAttrEvent = new Event("removeItemAttrEvent");
    removeItemAttrEvent.beforeUpdated = JSON.parse(JSON.stringify(this.data))
    let temp = this.data
    for (let i = 0; i < keys.length; i++) {
        if (temp.hasOwnProperty(keys[i])) {
            if (i == keys.length - 1) {
                delete temp[keys[i]]
                removeItemAttrEvent.key = keys[i]
                removeItemAttrEvent.updated = this.data
                window.dispatchEvent(removeItemAttrEvent);
            } else {
                temp = temp[keys[i]]
            }
        } else {
            throw Error('LocalStorage根对象不存在该属性：' + keys[i])
        }
    }
    localStorage.setItem(this.name, JSON.stringify(this.data))
}
/**
 * destroy：
 * 销毁 【根localStorage 对象】，从浏览器本地存储中清除掉
 */
LocalStorage.prototype.destroy = function() {
    localStorage.removeItem(this.name)
    
}
/**
 * clear：
 * 清除浏览器本地存储中所有键值
 */
LocalStorage.prototype.clear = function() {
    localStorage.clear()
}
/**
 * 监听函数：
 * @param {Function} cb 回调函数
 */
LocalStorage.prototype.listener = function(cb){
    if(!this.is(this.name))return;
    window.addEventListener("setAttrEvent", function (e) {
        cb && cb({
            type:'update',
            beforeUpdated:e.beforeUpdated,
            updated:e.updated
        })
    });
    window.addEventListener("removeItemAttrEvent", function (e) {
        cb && cb({
            type:'del',
            beforeUpdated:e.beforeUpdated,
            updated:e.updated
        })
    }); 
}
export default LocalStorage