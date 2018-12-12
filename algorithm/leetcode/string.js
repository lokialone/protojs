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


console.log(firstUniqChar1("loveleetcode"))

