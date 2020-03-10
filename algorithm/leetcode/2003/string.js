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

// ["flower","flow","flight"]
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
// 0305
var longestCommonPrefix = function(strs) {
    let end = false;
    let index = 0;
    let common = '';
    while(!end) {
        let map = new Set();
        strs.forEach((item) => {
            let value = item.charAt(index);
            if (value === '') {
                end = true;
            } else {
                map.add(item.charAt(index))
            }
             
        });
        if (end || map.size !== 1) break;
        common += strs[0].charAt(index);
        index++;
    }
    return common;
};
var longestCommonPrefix2 = function(strs) {
   if (!strs.length) return '';
   let compare = strs[0];
   let common = '';
   for (let i = 0;  i < compare.length; i++) {
        let value = compare.charAt(i);
       for (let j = 0; j < strs.length; j++) {
           if (value !== strs[j].charAt(i) || value === '') return common;
        }
        common += value;
   }
   return common;
};

// console.log(longestCommonPrefix2(["flower","flow","flight"]));
let isSameArray = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    for(let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return false;
        }
    }
    return true;
}
let getMap = (s, i = 0, len = s.length) => {
    let map = [];
    let startIndex = 'a'.charCodeAt(0);
    for (; i< len; i++) {
        let value = s.charCodeAt(i) - startIndex;
        let key = map[value] || 0;
        console.log(s[i], value, key);
        map[value] = ++key;
    }
    return map;

}
var checkInclusion = function(s1, s2) {
    let map1 = getMap(s1);
    let len1 = s1.length;
    let len2 = s2.length;
    for (let i = 0; i < len2; i += 1) {
        let map2 = getMap(s2, i, len1 + i);
        console.log(map2);
        if (isSameArray(map1, map2)) return true;
    }
    return false;
}

console.log(checkInclusion('ab', 'eidbaooo'));

