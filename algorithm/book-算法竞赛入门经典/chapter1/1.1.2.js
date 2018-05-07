// p2 时间分配
//只关注算法，不考虑如何输入数据
require('../tool.js');
let testData = [{n: 3, j: 3}, {n: 4, j: 4}, {n: 5, j: 5}];
let testData_1 = [{n: 2,j : 5}, {n: 4, j: 2}, { n: 5, j: 3}]
// log 15
// step1 把数组根据j的大小重大到小排序
// 算出同步执行任务，需要多花的额外时间
function timeAssgin(data) {
    data.sort((a, b) => {
        return a.j < b.j;
    });
    let extraTime = 0;
    data.each((item, index) => {
        let tmp = item.j;
        let i = index + 1;
        let res = 0;
        if (index !== data.length - 1) {
            for(let len = data.length; i < len; i++) {
                res += data[i].n;
            }
            res += data[data.length - 1].j;
            tmp = tmp - res;
            extraTime = extraTime > tmp ? extraTime : tmp;
        } 
    });
    let res = 0;
    data.each((item, index) => {
        res += item.n
        if (index === data.length - 1) {
            res += item.j;
        }
    });
    res += extraTime;
    console.log(res);
}
// for my verison
timeAssgin(testData);
timeAssgin(testData_1);
// 不是去算需要多花的额外时间，而是去找额外需要的最大时间
function timeAssgin_2(data) {
    data.sort((a, b) => {
        return a.j < b.j;
    });
    let ans = 0;
    let s = 0;
    data.each((item, index) => {
        s += item.n;
        ans = Math.max(ans, s + item.j);
    });
    console.log(ans);  
}
// for my better version
timeAssgin_2(testData);
timeAssgin_2(testData_1);


