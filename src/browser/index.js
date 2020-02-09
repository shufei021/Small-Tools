function Browser(){}


/**
 * 判断是电脑还是手机
 * @return false或true
 */
export const isPC = function(){
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    var flag = true
    for (var i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) {
        flag = false
        break
      }
    }
    return flag
}


/**
 * 判断是否是ie浏览器
 * @return false或true
 */
export const isIE = function(){
    return IEVersion() !== -1
}

/**
 * 获取ie版本
 * @return ie版本 没有则返回 -1 
 */
export const IEVersion = function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return -1;//不是ie浏览器
    }
}

/**
 * 判断是否是微信浏览器
 * @return false或true
 */
export const isWeiChat = function  () {
    var userAgent = navigator.userAgent
    return userAgent.toLowerCase().indexOf('micromessenger') > -1 // 微信浏览器
}


/**
 * 判断是否是安卓
 * @return false或true
 */
export const isAndroid = function  () {
    var userAgent = navigator.userAgent
    return userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1
}
/**
 * 判断是否是IOS
 * @return false或true
 */

export const isIos = function  () {
    var userAgent = navigator.userAgent;
    return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
/**
 * 获取浏览器类型
 * @return 浏览器类型
 */
export const BrowserType =  function () {
    var userAgent = navigator.userAgent
    var isOpera = userAgent.indexOf('Opera') > -1
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera
    var isEdge = userAgent.indexOf('Edge') > -1

    var isFF = userAgent.indexOf('Firefox') > -1

    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1

    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1
    
    if (isIE) {

        var reIE = new RegExp('MSIE (\\d+\\.\\d+);').test(userAgent)

        var fIEVersion = parseFloat(RegExp['$1'])

        

        if (fIEVersion === 7) {

            return 'IE7'

        } else if (fIEVersion === 8) {

            return 'IE8'

        } else if (fIEVersion === 9) {

            return 'IE9'

        } else if (fIEVersion === 10) {

            return 'IE10'

        } else if (fIEVersion === 11) {

            return 'IE11'

        } else {

            return null //IE版本过低

        }
    }
    if (isFF) {

        return 'FF'

    } else if (isOpera) {

        return 'Opera'

    } else if (isSafari) {

        return 'Safari'

    } else if (isChrome) {

        return 'Chrome'

    } else if (isEdge) {

        return 'Edge'

    }
}
Browser.prototype = {
    BrowserType,
    isAndroid,
    isWeiChat,
    IEVersion,
    isIE,
    isPC,
    isIos
}
export default new Browser()
