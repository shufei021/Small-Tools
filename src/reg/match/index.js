import Reg from '../Reg.js'

Reg.prototype.matchImgUrl = function(imgTagHtmlString){
    var r=[];
    imgTagHtmlString.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (m,c) {
      r.push(c);
    });
    return r;
}
Reg.prototype.matchBetweenContent = function(str, f, l, pattern = 1, index = -1) {
    //需要转义 的元数据
    var meta = '([{}])\^$|)?*+.'

    //检测是否包含
    var F = meta.includes(f) ? `\\${f}` : f
    var L = meta.includes(l) ? `\\${l}` : l
    var p1 = '*?'
    var p2 = '?'
    var p3 = ''
    var regStr = `[${F}]${pattern == 2 ? '?' : ''}([^${F + L}]+)[${L}]${pattern == 1 ? p1 : pattern == 2 ? p2 : p3}`

    var reg = new RegExp(regStr, 'gi')

    var result =pattern == 1 ? str.match(reg).map(i => i.substr(1)) : str.match(reg)

    return index == -1 ? result : result[index>result.length?result.length-1:index]
}
export default Reg