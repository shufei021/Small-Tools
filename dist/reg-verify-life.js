!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.reg=t():e.reg=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(2),a=n(3),o=n(4);e.exports=function(e){return r(e)||a(e)||o()}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";function r(){}n.r(t),r.prototype.extend=function(e,t){"function"==typeof t||"[object RegExp]"===Object.prototype.toString.call(t)?this[e]=function(e,n){var r="function"==typeof t?t(e,n):t.test(e);return n&&n(r),r}:console.warn("The data you pass in should be a function or a regular")};var a=r,o={Email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,Empty:/^\s*$/,Space:/\s+/,Number:/^\d+$/,Ip:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/,Fax:/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,Phone:/^1[3|4|5|6|7|8|9]\d{9}/,Url:/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,Money:/^(0|[1-9]\d*)(\.\d+)?$/,Chinese:/^[\u0391-\uFFE5]+$/,English:/^[A-Za-z]+$/,Percent:/^-?(100|(([1-9]\d|\d)(\.\d{1,2})?))%$/,IDcard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,VehicleNumber:{8:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,7:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/},Int:/^-?\d+$/,Float:/^(-?\d+)(\.\d+)?$/};Object.keys(o).forEach((function(e){"VehicleNumber"===e?a.prototype.isVehicleNumber=function(e,t){if(7==e.length||8==e.length){var n=o.VehicleNumber[e.length].test(str);return t&&t(n),n}throw Error("车牌号输入有误")}:a.prototype["is"+e]=function(t,n){var r=o[e].test(t);return n&&n(r),r}}));var i=a;a.prototype.matchImgUrl=function(e){var t=[];return e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,n){t.push(n)})),t},a.prototype.matchBetweenContent=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o="([{}])^$|)?*+.",i=o.includes(t)?"\\".concat(t):t,u=o.includes(n)?"\\".concat(n):n,s="*?",g="?",l="",c="[".concat(i,"]").concat(2==r?"?":"","([^").concat(i+u,"]+)[").concat(u,"]").concat(1==r?s:2==r?g:l),f=new RegExp(c,"gi"),d=1==r?e.match(f).map((function(e){return e.substr(1)})):e.match(f);return-1==a?d:d[a>d.length?d.length-1:a]};new i;var u=n(0),s=n.n(u);function g(){}var l=function(e,t,n){for(var r=[];r.length<=n;){var a=Math.ceil(Math.random()*t);a>=e&&a<=t&&r.push(a)}return r},c=function(e,t,n){for(var r=[];r.length<=n;){var a=Math.ceil(Math.random()*t);a>=e&&a<=t&&!r.includes(a)&&r.push(a)}return r},f=function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),r="",a=e>=30?30:e;r.length<=a;){var o=Math.floor(62*Math.random());t?r+=n[o]:r.includes(n[o])||(r+=n[o])}return r},p=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},h=function(e,t){return s()(Array(e).keys()).map((function(e){return new Date((t?new Date(t):Date.now())-864e5*e).toLocaleDateString()})).map((function(e){return e.split(/\/|-/).map((function(e){return e.padStart(2,"0")})).join("-")}))};g.prototype={randomNum:l,randomNoRepeatNum:c,randomString:f,guid:p,passDate:h};var y=new g;function D(){}var m=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n},v=function(){return-1!==w()},w=function(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=e.indexOf("Edge")>-1&&!t,r=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1;if(t){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var a=parseFloat(RegExp.$1);return 7==a?7:8==a?8:9==a?9:10==a?10:6}return n?"edge":r?11:-1},M=function(){return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},S=function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("Adr")>-1},b=function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},x=function(){var e=navigator.userAgent,t=e.indexOf("Opera")>-1,n=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!t,r=e.indexOf("Edge")>-1,a=e.indexOf("Firefox")>-1,o=e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),i=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1;if(n){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var u=parseFloat(RegExp.$1);return 7===u?"IE7":8===u?"IE8":9===u?"IE9":10===u?"IE10":11===u?"IE11":null}return a?"FF":t?"Opera":o?"Safari":i?"Chrome":r?"Edge":void 0};D.prototype={BrowserType:x,isAndroid:S,isWeiChat:M,IEVersion:w,isIE:v,isPC:m,isIos:b};var O=new D;function E(){}var A=function(){var e=arguments[0]?arguments[0].split(" ")[0].split(/[\_./-]/)[0]:(new Date).getFullYear();return e%4==0&&e%100!=0||e%400==0},I=function(e){var t=e.split(/[\_./-]/),n=t[0]+"-"+(t[1].length<2?"0"+t[1]:t[1])+"-"+(t[2].length<2?"0"+t[2]:t[2]);return/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(n)},T=function(e){var t=e.split(":"),n=t[0]+":"+(t[1].length<2?"0"+t[1]:t[1])+":"+(t[2].length<2?"0"+t[2]:t[2]);return/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/.test(n)},$=function(e){var t=e.split(" "),n=t[0].split(/[\_./-]/),r=t[1].split(":"),a=n[0]+"-"+(n[1].length<2?"0"+n[1]:n[1])+"-"+(n[2].length<2?"0"+n[2]:n[2]),o=r[0]+":"+(r[1].length<2?"0"+r[1]:r[1])+":"+(r[2].length<2?"0"+r[2]:r[2]);return/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(a)&&/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/.test(o)},F=function(e){var t=arguments[1]?new Date(arguments[1]):new Date;return t.setDate(t.getDate()+e),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},P=function(e){var t=arguments[1]?new Date(arguments[1]):new Date;return t.setMonth(t.getMonth()+e),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},j=function(){var e=arguments[0]?new Date(arguments[0]).getDay():(new Date).getDay();return["日","一","二","三","四","五","六"][e]},N=function(e){var t=arguments[1]?new Date(arguments[1]):new Date,n=0==t.getDay()?7:t.getDay();return n==(e=0==e?7:e)?t:(t.setDate(t.getDate()-(n-e)),t)},B=function(){var e=arguments[0]?new Date(arguments[0]):new Date;return e.setMonth(e.getMonth()+1),e.setDate(1),e.setDate(e.getDate()-1),e.getDate()},Y=function(){if(arguments[0]){var e=new Date(arguments[0]).getTime();(n=new Date(arguments[0])).setMonth(0),n.setDate(1);var t=n.getTime();return Math.ceil(((e-t)/1e3/24/60/60+1)/7)}var n=new Date;e=new Date(n).getTime();n.setMonth(0),n.setDate(1);t=n.getTime();return Math.ceil((e-t)/1e3/24/60/60/7)},R=function(e,t){return parseInt(Math.abs(e-t)/1e3/60/60/24)},k=function(){if(1===arguments.length){var e=arguments[0].split(" ")[1]?arguments[0]:arguments[0]+" 00:00:00";return parseInt(Math.abs(new Date(d).getTime()-new Date(e).getTime())/1e3/24/60/60)}if(2===arguments.length){var t=arguments[0].split(" ")[1]?arguments[0]:arguments[0]+" 00:00:00";e=arguments[1].split(" ")[1]?arguments[1]:arguments[1]+" 00:00:00";return parseInt(Math.abs(new Date(t).getTime()-new Date(e).getTime())/1e3/24/60/60)}return""},C=function(e,t){for(var n=[],r=new Date,a=(t=t||r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),parseInt(Math.abs(new Date(e.split(" ")[0]+" 00:00:00")-new Date(t.split(" ")[0]+" 00:00:00"))/1e3/24/60/60)+1),o=0;o<a;o++){var i=new Date(new Date(e).getTime()+864e5*o);n.push(i.getFullYear()+"-"+(i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1)+"-"+(i.getDate()<10?"0"+i.getDate():i.getDate()))}return n},V=function(e){var t=arguments[1]?new Date(arguments[1]):new Date;switch(e){case"年":return t.getFullYear();case"月":return t.getMonth()+1;case"日":return t.getDate();case"时":return t.getHours();case"分":return t.getMinutes();case"秒":return t.getSeconds();default:return""}},_=function(){var e=new Date;if(0===arguments.length)return[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];if(1===arguments.length){var t=arguments[0].split(" ")[1]?arguments[0]:arguments[0]+" 00:00:00",n=new Date(t);return[n.getFullYear(),n.getMonth()+1,n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()]}return""},H=function(){if(arguments[0])var e=arguments[0].split(" ");else{var t=new Date;e=[t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()]}var n=e[0].split(/[\_./-]/);if(e[1]){var r=e[1].split(":");return n[0]+"-"+(n[1].length<2?"0"+n[1]:n[1])+"-"+(n[2].length<2?"0"+n[2]:n[2])+" "+(r[0].length<2?"0"+r[0]:r[0])+":"+(r[1].length<2?"0"+r[1]:r[1])+":"+(r[2].length<2?"0"+r[2]:r[2])}return n[0]+"-"+(n[1].length<2?"0"+n[1]:n[1])+"-"+(n[2].length<2?"0"+n[2]:n[2])+" 00:00:00"},W=function(e){var t=arguments[1]?new Date(arguments[1]).getTime():(new Date).getTime(),n=new Date(t+864e5*e),r=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),i=n.getHours(),u=n.getMinutes(),s=n.getSeconds();return r+"-"+(a<10?"0"+a:a)+"-"+(o<10?"0"+o:o)+" "+(i<10?"0"+i:i)+":"+(u<10?"0"+u:u)+":"+(s<10?"0"+s:s)},Z=function(e){var t=new Date,n=arguments[1]?new Date(arguments[1]):t,r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in/(y+)/i.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return e},z=function(){var e=arguments[0]?new Date(arguments[0]):new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),i=e.getSeconds();return t+"-"+(n<10?"0"+n:n)+"-"+(r<10?"0"+r:r)+" "+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)};E.prototype={isLeapYear:A,isValidDate:I,isValidTime:T,isValidateDateTime:$,getBeAfDateByDate:F,getBeAfDateByMonth:P,getWeek:j,getWeekByDate:N,getMaxDayOfDate:B,getWeekNumOfYear:Y,getDaysByStamps:R,getDateDiff:k,getAllDatesBetween:C,getDatePart:V,dateToArray:_,dateToStandard:H,datePlusMinus:W,dateFormat:Z,dateToString:z};var J=new E,L=n(1),U=n.n(L);function q(e,t){e?this.init(e):console.warn('【localStorage】:localStorage-root-key "['.concat(e,']" is required'))}q.prototype.init=function(e){this.is(e)?console.warn('【localStorage】:localStorage-root-key "['.concat(e,']" is exist')):(this.name=e,this.data={},localStorage.setItem(this.name,JSON.stringify(this.data)))},q.prototype.is=function(e){return void 0!==localStorage[e]},q.prototype.type=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},q.prototype.set=function(e,t){var n=Array.prototype.slice.call(arguments),r=n.every((function(e){return null!==e&&"object"===U()(e)}));if(r)for(var a=0;a<n.length;a++)for(var o in n[a])this.data[o]=n[a][o];else this.data[e]=t;localStorage.setItem(this.name,JSON.stringify(this.data))},q.prototype.edit=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.slice(0,t.length-1),a=t[t.length-1],o=this.data,i=0;i<r.length;i++)o.hasOwnProperty(r[i])&&(i==r.length-1?o[r[i]]=a:o=o[r[i]]);localStorage.setItem(this.name,JSON.stringify(this.data))},q.prototype.get=function(){for(var e=null,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var a=0;a<n.length;a++){if(0==a){if(!this.data[n[a]])throw Error(n[a]+"不存在")}else if(!e.hasOwnProperty(n[a]))throw Error(n[a-1]+"对象下面不存在key："+n[a]);if(0==a&&"object"===this.type(this.data[n[a]]))e=this.data[n[a]];else if(0==a)e=this.data[n[a]];else{if(!(e=e[n[a]]))throw Error(n[a]+"键对应的值不是一个对象");if("array"===this.type(e))throw Error(n[a]+"键对应的值不是一个对象")}}return e},q.prototype.del=function(){for(var e=this.data,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var a=0;a<n.length;a++){if(!e.hasOwnProperty(n[a]))throw Error("LocalStorage根对象不存在该属性："+n[a]);a==n.length-1?delete e[n[a]]:e=e[n[a]]}localStorage.setItem(this.name,JSON.stringify(this.data))},q.prototype.destroy=function(){localStorage.removeItem(this.name)},q.prototype.clear=function(){localStorage.clear()};var X=q;function G(){}G.prototype={generater:y,randomNum:l,randomNoRepeatNum:c,randomString:f,guid:p,passDate:h,browser:O,BrowserType:x,isAndroid:S,isWeiChat:M,IEVersion:w,isIE:v,isPC:m,isIos:b,date:J,isLeapYear:A,isValidDate:I,isValidTime:T,isValidateDateTime:$,getBeAfDateByDate:F,getBeAfDateByMonth:P,getWeek:j,getWeekByDate:N,getMaxDayOfDate:B,getWeekNumOfYear:Y,getDaysByStamps:R,getDateDiff:k,getAllDatesBetween:C,getDatePart:V,dateToArray:_,dateToStandard:H,datePlusMinus:W,dateFormat:Z,dateToString:z,LocalStorage:X};t.default=new G}]).default}));
//# sourceMappingURL=reg-verify-life.js.map