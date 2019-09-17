// 获取某个子串的最大不重复子串长度

let str = 'abcabcbb';

function subString(str) {
    let sub = [];
    let maxLen = 0;
    for (let i = 0; i < str.length; i++) {
        let index = sub.indexOf(str[i]);
        if (index === -1) {
            sub.push(str[i]);
        } else {
            maxLen = (sub.length) > maxLen ? sub.length : maxLen;
            sub.splice(0, index+1);
            sub.push(str[i]);   
        }
    }
    return maxLen > sub.length ? maxLen : sub.length
}

console.log(subString(str));