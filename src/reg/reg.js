
function Reg(){}


Reg.prototype.extend = function(name,rule){
    if(typeof(rule) === "function" || Object.prototype.toString.call(rule) === "[object RegExp]"){
        this[name] = function(target,cb){
            let res = typeof(rule) === "function"? rule(target,cb):rule.test(target)
            cb && cb(res)
            return res
        }
    }else{
        console.warn('The data you pass in should be a function or a regular')
    }
}

export default Reg

