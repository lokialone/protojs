// p2 时间分配
//只关注算法，不考虑如何输入数据
require('../tool.js');
let testData = [{n: 3, j: 3}, {n: 4, j: 4}, {n: 5, j: 5}];

// step1 把数组根据j的大小重大到小排序

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

timeAssgin(testData);

