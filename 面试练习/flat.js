const _ = require('ramda');
const functor = require('./functor');
const {IO, Maybe} = functor;
let res = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// function flat(arr, res = []) {
//     arr.forEach((item) => {
//         if (typeof item === 'object') {
//            flat(item, res);
//         } else {
//             res.push(item);
//         }
//     });
//     return res;
// }
function flat(arr) {
    return arr.reduce((acc, v) => {
        return Array.isArray(v) ? acc.concat(flat(v)) : acc.concat(v) 
    }, [])
}

function unique(arr) {
    let res = new Set(arr);
    return [...res];
}

function sort(arr) {
    return arr.sort((a, b) => (a - b));
}

var mmo = Maybe.of(Maybe.of("nunchucks"));
var ioio = IO.of(IO.of("pizza"));
console.log('====================================');
console.log(mmo, ioio);
console.log(mmo.join())
console.log('====================================');