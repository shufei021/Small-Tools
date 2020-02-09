

import generater,{
    randomNum,
    randomStr,
    guid,
    passDaysDate,
    between
} from './generater/index.js'

import browser,{
    BrowserType,
    isAndroid,
    isWeiChat,
    IEVersion,
    isIE,
    isPC,
    isIos
} from './browser/index.js'

import date,{
    isLeapYear,
    isValidDate,
    isValidTime,
    isValidateDateTime,
    getBeAfDateByDate,
    getBeAfDateByMonth,
    getWeek,
    getWeekByDate,
    getMaxDayOfDate,
    getWeekNumOfYear,
    getDaysByStamps,
    getDateDiff,
    getAllDatesBetween,
    getDatePart,
    dateToArray,
    dateToStandard,
    datePlusMinus,
    dateFormat,
    dateToString
} from './date/index.js'


import LocalStorage from './storage/localStorage/index.js'
import url,{
    serialize,
    getUrlParms
} from './url/index.js'
import preview,{
    echoMonth,
    echoWeek,
    echoDate
} from './preview/index.js'

function Utils(){}

Utils.prototype = {
    /**
     * Generater
     */
    randomNum,
    randomStr,
    guid,
    passDaysDate,
    between,
    /**
     * Browser
     */
    BrowserType,
    isAndroid,
    isWeiChat,
    IEVersion,
    isIE,
    isPC,
    isIos,
     /**
     * Date
     */
    isLeapYear,
    isValidDate,
    isValidTime,
    isValidateDateTime,
    getBeAfDateByDate,
    getBeAfDateByMonth,
    getWeek,
    getWeekByDate,
    getMaxDayOfDate,
    getWeekNumOfYear,
    getDaysByStamps,
    getDateDiff,
    getAllDatesBetween,
    getDatePart,
    dateToArray,
    dateToStandard,
    datePlusMinus,
    dateFormat,
    dateToString,
    /**
     * localStorage
     */
    LocalStorage,
    /**
     * Url
     */
    serialize,
    getUrlParms,
    /**
     * preview
     */
    echoMonth,
    echoWeek,
    echoDate

}
export default new Utils()