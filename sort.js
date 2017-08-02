//start@170802
//1.实现一个类似原生的sort，可以接受函数来做sort的依据
//2. 与原生的sort函数运行时间进行比较
//3.todo 快排
let arr = [1, 2, 4, 5, 7, 8, 9, 10, 0, 4];

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



console.time('time2');
arr.sort();
console.timeEnd('time2');
console.time('time1');
sort1(arr);
console.timeEnd('time1');