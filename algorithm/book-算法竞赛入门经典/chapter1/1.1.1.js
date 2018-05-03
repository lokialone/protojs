// the dragon of loowater  p1
require('../tool.js');
const util = require('util');

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let m = 0;
let nr = [];
let mr = [];

// fool version
function deal(nr, mr) {
    if (nr.length > mr.length) {
        return 'Loowater is doomed';
    }
    nr.sort();
    mr.sort();
    let res = 0;
    let count = 0;
    let j = 0;
    // 为什么要去遍历nr呢？ 自己也想不明白。 搞得下面要写while,额。
    // 优先去遍历那个一般情况下个数要大的那个
    for(let i = 0, len = nr.length; i < len; i++) {
        while(nr[i] > mr[j] && j < mr.length) {
            j++;
        }

        if (j === mr.length) {
            break;
        }

        if(nr[i] <= mr[j]) {
            res += mr[j];
            count++;
        }  
    }
    if (count === nr.length) return res;
    return 'Loowater is doomed'

}

function deal_2(nr, mr) {
    nr.sort();
    mr.sort();
    let res = 0;
    let count = 0;
    // .each 方法在tool.js里
    mr.each(function(item) {
        if (item >= nr[count]) {
            count++;
            res += item;
        }
        if (count === nr.length) {
            return false;
        }
    });
    
    if (count === nr.length) return res;
    return 'Loowater is doomed';
}

rl.on('line',function(line){
    var nums = line.split(' ');
    if (nums.length === 2) {
        n = parseInt(nums[0]);
        m = parseInt(nums[1]);
        nr = [];
        mr = [];
        if (!n & !m) rl.close();
    } else {
        if (nr.length != n) {
            nr.push(parseInt(line));
            console.log('nr', nr);
        } else if (mr.length < m - 1) {
            mr.push(parseInt(line));
            console.log('mr', mr);
        } else {
            mr.push(parseInt(line));
            console.log(deal_2(nr, mr));
        }
    }
});