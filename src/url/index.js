function Url(){}

/**
* url 参数序列化
* @param {String} baseURL 
* @param {Object} params 
*/
export const serialize = function(baseURL,params){
   return Object.keys(params).reduce((pre,cur)=> pre += ((pre===baseURL? '?':'&')+`${cur}=${params[cur]}`),baseURL)
}

/**
 * 获取当前页面路径 或 指定路径 上的 参数集合
 * @param {String} url 指定一个url路径字符串
 * 
 */
export const getUrlParms = function(url){
    return  (url?url:location.href).includes('?')?(url?url:location.href).split('?')[1].match(/([^&=]*)=([^&]*)/g).reduce((pre,cur)=> {pre[cur.split('=')[0]] = cur.split('=')[1];return pre},{}):{}
}

Url.prototype = {
    serialize,
    getUrlParms
}
export default new Url()
