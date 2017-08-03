//start@170802
//1.实现一个类似原生的sort，可以接受函数来做sort的依据
//2. 与原生的sort函数运行时间进行比较
//3.todo 快排
//4.理解冒泡函数的原理
let arr = [1, 2, 4, 5, 7, 8, 9, 10, 0, 4, 44, 3, 55, 5, 5, 29, 40];

// 冒泡
function sort1(arr, fun) {
    if (!fun) {
        fun = function (a, b) {
            if (a > b) {
                return true
            }
            return false;
        }
    }
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (fun(arr[i], arr[j])) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}



console.time('origin');
arr.sort();
console.timeEnd('origin');
// console.time('time1');
// sort1(arr);
// console.timeEnd('time1');


//插入排序
function sort2(arr) {
    let resArray = [];
    arr.forEach((item) => {
        if (!resArray.length) {
            resArray.push(item);
        } else {
            let needIndex = 0;
            resArray.every((item2, index) => {
                if (item < item2) {
                    needIndex = index;
                    return false
                }
                return true;
            });
            resArray.splice(needIndex, 0, item);
        }
    });
    return resArray;
}

console.log(sort2(arr));