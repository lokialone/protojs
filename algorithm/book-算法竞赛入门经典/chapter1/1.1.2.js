// p2 时间分配
//只关注算法，不考虑如何输入数据

let testData = [{n: 2, j: 1}, {n: 3, j: 2}, {n: 2, j: 5}];

// step1 把数组根据j的大小重大到小排序

function timeAssgin(data) {
    data.sort((a, b) => {
        return a.j > b.j;
    });
    console.log(data);
}

timeAssgin(testData);

