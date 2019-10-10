// reduce 使用实战
/**
 * 将多维数组铺平
 * @param {*} arr 
 */
function flatten(arr) {
    return arr.reduce((acc, v) => {
        return Array.isArray(v) ? acc.concat(flatten(v)) : acc.concat(v)
    }, [])
}

console.log(flatten([
    [1],
    [2, 3],
    [
        [2, 3], 2
    ]
]));

// Challenge 4
function forEach(array, callback) {
    array.forEach((item, index) => {
        callback(item, index);
    })
}

// see for yourself if your forEach works!
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet)

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let ar = [];
    forEach(array, (item) => {
        ar.push(callback(item));
    });
    return ar;
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
    let res = initialValue
    forEach(array, (item) => {
        res += callback(item);
    })
    return res;
}

console.log(reduce([1, 2, 3], addTwo, 0));

//Extension 3
// function intersection(...arrays) {
//   let first = arrays[1];
//   return arrays.reduce((acc, item) => {
//     let res = [];
//     item.forEach((i) => {
//       if (acc.includes(i)) res.push(i);
//     })
//     return res;
//   }, first);
// }

function intersection(...arrays) {
    let first = arrays[1];
    return arrays.reduce((acc, item) => {
        return item.reduce((acc2, item2) => {
            if (acc.includes(item2)) acc2.push(item2);
            return acc2;
        }, [])
    }, first);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((acc, item) => {
        return item.reduce((acc2, item2) => {
            if (!acc2.includes(item2)) acc2.push(item2);
            return acc2;
        }, acc)
    }, [])
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((acc, item, index) => {
        if (array2[index] && callback(item) === (array2[index])) acc[item] = array2[index]
        return acc;
    }, {})
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) {
    return str.toUpperCase();
}));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, item) => {
        let arr = arrCallbacks.reduce((acc2, callback) => {
            acc2.push(callback(item));
            return acc2;
        }, []);
        acc[item] = arr;
        return acc;
    }, {});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function (str) {
    return str.toUpperCase();
}, function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}, function (str) {
    return str + str;
}]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }