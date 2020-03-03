// 0303
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//滑动窗口
let res = [];
var lengthOfLongestSubstring = function(str) {
    let left = -1;
    let maxLen = 0;
    let map = {};
    if (!str) return maxLen;
    let len = str.length;
    for(let i = 0; i < len; i++) {
        let value = str.charAt(i);
        left = Math.max(left, map[value] !== undefined ? map[value] :-1);
        map[value] = i;
        maxLen = Math.max(maxLen, i - left);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring('abca'))

// 递归版冒泡排序
let arr = [4,9,0, 2,6,9,10,33];

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function normalBuble(arr) {
    for (let i = 0;  i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr [i] > arr[j]) swap(arr, i,j);
        }
    }
}

function recursiveBuble(arr, start = 0, next = 1) {
    if (next > arr.length) {
        if (start > arr.length - 1) return;
        return recursiveBuble(arr, start + 1, start + 2);
    }
    if (arr[start] > arr[next]) swap(arr, start, next);
    return recursiveBuble(arr, start, ++next)
}
// recursiveBuble(arr);
// console.log(arr);

