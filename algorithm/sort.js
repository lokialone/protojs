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



// console.time('origin');
// arr.sort();
// console.timeEnd('origin');
// console.time('time1');
// sort1(arr);
// console.timeEnd('time1');


//插入排序
//使用了空数组0.0，感觉可以去掉
function sort2(arr) {
    let resArray = [];
    arr.forEach((item) => {
        if (!resArray.length) {
            resArray.push(item);
        } else {
            let needIndex = arr.length - 1;
            resArray.every((item2, index) => {
                if (item2 > item) {
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
//insert_sort 不借用空数组
function sort2_2(arr) {
    for(let i = 1, len = arr.length; i < len; i++) {
        for(let j = 0; j < i;j++){
            if (arr[i] < arr[j]) {
                arr.splice(j, 0, arr[i]);
                arr.splice(i + 1, 1);
                break;
            }
        }
    }
    return arr;
}

// console.log(sort2(arr));
// console.time('insert_sort');
// sort2(arr);
// console.timeEnd('insert_sort');

console.log(sort2_2(arr));

// 快排
function  quickSort(params) {
    if (!params.length) return [];
    let first = params.splice(0,1);
    let left = [];
    let right = [];
    params.forEach(item => {
        first > item ? left.push(item) : right.push(item)
    }); 
    return quickSort(left).concat(first, quickSort(right));
}