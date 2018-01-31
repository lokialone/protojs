/**
 * 获取本周的周一的日期， 周末的日期
 */

import moment from 'moment';
// 定义数据类型
const format = 'YYYY-MM-DD';
// 获取本周一的日期
export function getCurrentWeekStartDate() {
    return moment().isoWeekday('Monday').format(format);
}
// 获取本周日的日期
export function getCurrentWeekEndDate() {
    return moment().isoWeekday('Sunday').format(format);
}
// 获取上周一
export function getLastWeekStartDate() {
    return moment().weekday(-6).format(format);
}
// 获取上周日
export function getLastWeekEndDate() {
    return moment().weekday(0).format(format);
}

// 获取当前月份
export function getCurrentMonth() {
    return moment().month() + 1;
}
// 根据月份返回本月1号
export function getMonthStartDate(month = '') {
    month = month ? month - 1 : '';
    return moment().month(month).date(1).format(format);
}
// 根据月份返回本月月底日期
export function getMonthEndDate(month = '') {
    month = month ? month - 1 : '';
    return moment().month(month).endOf('month').format(format);
}

/**
 * 根据传入的date获取月份
 * @param {*} date 
 * return 传入日期的所在的月份。默认返回当天的所在的月份
 */
export function getMonthByDate(date = '') {
    return moment(date).month() + 1;
}

/**
 * 获取今天的日期
 * param format 可不传，默认 'YYYY-MM-DD'
 * return 格式需要的今天的日期
 */
export function getCurrentDay(format = 'YYYY-MM-DD') {
    return moment().format(format);
}

// 获取最近三个月的日期，包括本月
export function getLastThreeMonthDate() {
    let res = [];
    res.push(getCurrentDay());
    res.push(moment().subtract(1, 'month').format(format));
    res.push(moment().subtract(2, 'month').format(format));
    return res;
}
/**
 * get month start date by param date 
 * @param {string} [date=''] 
 * @returns month start date
 */
export function getMonthStartDate(date = '') {
    return moment(date).date(1).format(format);
}
/**
 * get month end date by param date 
 * @param {string} [date=''] 
 * @returns month end date
 */
export function getMonthEndDate(date = '') {
    return moment(date).endOf('month').format(format);
}

export default {
    getCurrentWeekStartDate,
    getCurrentWeekEndDate,
    getLastWeekStartDate,
    getLastWeekEndDate,
    getMonthStartDate,
    getMonthEndDate,
    getCurrentMonth
};

