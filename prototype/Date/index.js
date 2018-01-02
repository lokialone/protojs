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

export default {
    getCurrentWeekStartDate,
    getCurrentWeekEndDate,
    getLastWeekStartDate,
    getLastWeekEndDate,
    getMonthStartDate,
    getMonthEndDate,
    getCurrentMonth
};

