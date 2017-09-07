//Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// For example:
//str1 is 'rkqodlw' and str2 is 'world' the output should return true.
//str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
//str1 is 'katas' and str2 is 'steak' should return false.


//解法可以使用，但是大数据情况下，表现较差，未被通过
function scramble(str1, str2) {
    //code me
    let arr = str1.split('');
    return str2.split('').every(item => {
        let index = arr.indexOf(item);
        if (index > -1) {
           arr.splice(index, 1);
        }
        return index > -1;
        }
    );
}

console.log(scramble('scriptjava','javascript'));