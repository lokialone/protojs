const R = require('ramda');
// 对象必定是以 {开头， } 结尾。其中所有出现的 {、}必然成对。
function findPlainObject(str) {
    let index = 0;
    let firstLeftIndex = 0;
    let hasFindFirstLeft = false;
    let record = 0;
    let endRight = 0;
    let isStringStart = '';
    while(index < str.length) {
        if (str[index] === '{') {
            record += 1;
            if (!hasFindFirstLeft) {
                hasFindFirstLeft = true;
                firstLeftIndex = index;
            }
        } else if (str[index] === '}'){
            record -=1;
        }

        if (hasFindFirstLeft && record === 0) {
            endRight = index;
            return {
                start:  firstLeftIndex,
                end: endRight
            }
        }
        index +=1;
    }
}

// const str ='ddd';
// let regex = /wx.cgiData = ([\S\s]*)/;
// try {
//     let res = str.match(regex)[0] || '';
//     let { start, end } = findPlainObject(res);
//     let objectString = res.slice(start, end + 1); 
// } catch (error) {
//     console.log(error)
// }

// console.log(JSON.parse(JSON.stringify(objectString)));
let vm = '';
const onMounted = (callback) => {
    vm['dd'] = callback;
}
const a = {
    setup() {
        onMounted(() => {
            console.log('this, a');
        });
    },
    $mount() {
        vm.dd();
    }
}

a.setup();
a.$mount();
