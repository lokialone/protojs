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

function scramble2(str1, str2) {
    //code me
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    for(let i = 0, len = arr2.length; i < len; i++) {
        let index = arr1.indexOf(arr2[i]);
        if (index > -1) {
            arr1.splice(index, 1);
        } else {
   
             return  false;
        } 
    }
    return true; 
}

function scramble3(str1, str2) {
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
    let startIndex = 0;
    let hasOne = false;
    for(let i = 0, len1 = arr2.length; i < len1; i++) {
        hasOne = false;
        for( let j = startIndex, len2 = arr1.length; j< len2; j++ ) {
            if (arr2[i] === arr1[j]) {
                startIndex = j;
                hasOne = true;
                break;
            }
        }
        if (!hasOne) return false;
    }
    return true;
}

// console.time('scamble1');
// scramble('scriptjavadfsfsdfsdfsdfsdfsdffdfdfdfdfdfdfdfdfdfdfdfddffdfdfdfsdffvsjvsfjgnbfacnamlpweruqvskfmksmckfjdnvjsfnvlksd','jsdcvscdcdceclmcmalopnpeavascriptfdfdfdfdfdfdfdfdfdfdfdfsafdfasdfasfasfsdfsdfasfdsafdfdsfdsfasfafdsfafsda');
// console.timeEnd('scamble1');

// console.time('scamble2');
// scramble2('dscriptjavadfsfsdfsdfsdfsdfsdffdfdfdfdfdfdfdfdfdfdfdfddffdfdfdfsdffvsjvsfjgnbfacnamlpweruqvskfmksmckfjdnvjsfnvlksd','jsdcvscdcdceclmcmalopnpeavascriptfdfdfdfdfdfdfdfdfdfdfdfsafdfasdfasfasfsdfsdfasfdsafdfdsfdsfasfafdsfafsda');
// console.timeEnd('scamble2');

// console.time('scamble3');
// scramble3('dscriptjavadfsfsdfsdfsdfsdfsdffdfdfdfdfdfdfdfdfdfdfdfddffdfdfdfsdffvsjvsfjgnbfacnamlpweruqvskfmksmckfjdnvjsfnvlksd','jsdcvscdcdceclmcmalopnpeavascriptfdfdfdfdfdfdfdfdfdfdfdfsafdfasdfasfasfsdfsdfasfdsafdfdsfdsfasfafdsfafsda');
// console.timeEnd('scamble3');

//others solution
//todo read carefully
function scramble4(str1, str2) {
    var map={};
    for(var i in str1) {
      map[str1[i]] ? map[str1[i]]++ : map[str1[i]]=1;
    }
    for(var i in str2) {
      if(!map[str2[i]]) return false;
      map[str2[i]]--;
    }
    return true;
  }