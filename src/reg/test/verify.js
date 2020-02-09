import Reg from '../Reg.js'
import rules from './rules.js'




Object.keys(rules).forEach(function(ruleName){
    
    if(ruleName === 'VehicleNumber'){
        
        Reg.prototype['isVehicleNumber'] = function(target,cb){
            if(target.length==7 || target.length==8){
                let res = rules.VehicleNumber[target.length].test(str)
                cb && cb(res)
                return res
            }else{
                throw Error("车牌号输入有误")
            }
            
        }
    }else{
        Reg.prototype['is'+ruleName]=function(target,cb){
            let res = rules[ruleName].test(target)
            cb && cb(res)
            return  res
        }
    }
})
export default Reg