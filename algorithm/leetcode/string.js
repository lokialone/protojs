/**编写一个函数，其作用是将输入的字符串反转过来。
输入: "hello"
输出: "olleh"
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
}
// 116ms
var reverseString1 = function(s) {
    let a = s.split('')
    let len = a.length
    for(let i = 0; i < len/ 2; i++ ) {
        let tmp = a[i]
        a[i] = a[len - 1 -i]
        a[len - 1 -i] = tmp
    }
    return a.join('')
}
// 72ms
var reverseString2 = function(s) {
    let str = ''
    for (let i=s.length-1; i>=0; i--) {
        str += s[i]
    }
    return str
}
// console.log(reverseString1('abcd'))


// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 输入: 123
// 输出: 321
// 输入: -123
// 输出: -321
// 输入: 120
// 输出: 21
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s =x.toString()
    let str = ''
    let end = 0
    if (s[0] === '-') {
        end = 1
    }
    for (let i=s.length-1; i>=end; i--) {
        str += s[i]
    }
    
    let res = parseFloat(str)
    if (res > Math.pow(2, 31)) return 0
    return end ? res * -1 : res
};

// console.log(reverse(120))

/**
* 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引
*。如果不存在，则返回 -1。
* s = "leetcode"
* 返回 0.
* s = "loveleetcode",
* 返回 2.
*/
// 注意事项：您可以假定该字符串只包含小写字母。

/**
 * @param {string} s
 * @return {number}
 * 
 */
var firstUniqChar = function(s) {
    if (!s) return -1
    let set = {}
    for (let i=0 ,len = s.length; i< len; i++) {
        let v = s[i]
        if (set[v]) {
            set[v] += 1
        } else {
            set[v] = 1
        }
    }
    for (let i=0 ,len = s.length; i< len; i++) {
        let v = s[i]
        if (set[v] === 1) return i;
    }
    return -1
};
var firstUniqChar1 = function(s) {
    let firstUniqChar = s.length
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i=0 ,len = alpha.length; i< len; i++) {
        let v = alpha[i]
        let index = s.indexOf(v)
        if(index !== -1 && index === s.lastIndexOf(v)) {
            if (firstUniqChar > index) firstUniqChar = index
        }
    }
    return firstUniqChar == s.length ? -1 : firstUniqChar
};


// console.log(firstUniqChar1("loveleetcode"))

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。
// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    for (let i = 0, len = s.length; i < len; i++) {
        if (t.indexOf(s[i]) === -1) return false
        t = t.replace(s[i], '')
    }
    return true
};

var isAnagram1 = function(s, t) {
    var len=s.length
    for(var i=0;i<len;i++){
        if(s == t || s.length!=t.length) break;
        t=t.replace(new RegExp(s[0],'g'),"");        
        s=s.replace(new RegExp(s[0],'g'),"");
    }
    return s==t? true:false;
};
// console.log(isAnagram1("anagram", "nagaram"))    

/**验证字符串是否是回文
 * @param {string} s
 * @return {boolean}
 */


// var isNumberOrAlphabet = function s()
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let regexp = /^[a-z0-9]+$/
    let i = 0, j = s.length - 1
    while(i < j) {
        let start = s[i]
        let end = s[j]
        while(!start.match(regexp) && i < j) {
            start = s[++i]
        }
        while(!end.match(regexp) && i < j) {
            end = s[--j]
        }
        console.log(start, end)
        if (start !== end) return false
        i++;
        j--;
    }
    return true;
};

var isPalindrome1 = function(s) {
    let str = s.replace(new RegExp('[^a-zA-Z0-9]', "g"), "").toLowerCase();
    let i = 0, j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) return false
        i++
        j--
    }
    return true
}


// console.log(isPalindrome1(".,"))


// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
// 输入: "words and 987"
// 输出: 0
// 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
//      因此无法执行有效的转换。
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // str = str.replace(/(^\s*)/, '')
    str = str.trim()
    let regex = /^[+|-]?(\d+)/
    let reg = str.match(regex)
    if (str === '-' || str === '+' || !reg) return 0
    let num = parseInt(reg[0])
    let max = Math.pow(2, 31)
    let min = max * -1 + 1
    return Math.min(Math.max(min, num), max)
};
// console.log(myAtoi("    word -42"));

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    return haystack.search(needle) 
};
// console.log(strStr('hello', 'll'))
// console.log(strStr('aaaaa', 'baa'))


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 1;
    let common = strs[0] || '';
    while (i < strs.length && common !== '') {
        let len = strs[i].length < common.length ? strs[i].length : common.length;
        let tmp = ''
        for (let x = 0; x < len; x++) {
            if (strs[i][x] !== common[x]) {
                break;
            } else {
                tmp += common[x];
            };
        }
        common = tmp;
        i++;
    }
    return common;
};
// self 想用字典树的方式来做
var longestCommonPrefix1 = function(strs) {
    let i = 1;
    let common = strs[0] || '';
    while (i < strs.length && common !== '') {
        let len = strs[i].length < common.length ? strs[i].length : common.length;
        let tmp = ''
        for (let x = 0; x < len; x++) {
            if (strs[i][x] !== common[x]) {
                break;
            } else {
                tmp += common[x];
            };
        }
        common = tmp;
        i++;
    }
    return common;
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix([]))


// 将字符穿中每个单词首字符大写。
function capitailize(string) {
    return capIter(string, true, '')
}

function capIter(string, whitespace = false, res) {
    if (string.length <= 0) return res;
    let c = string[0];
    if (whitespace) c = c.toUpperCase();
    c === ' ' ?  whitespace = true : whitespace = false
    return capIter(string.substring(1), whitespace, res +=c)
}
console.log(capitailize('are you ok!'));




