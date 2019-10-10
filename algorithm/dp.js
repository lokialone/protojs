// nth ugly numbers
function nthUglyNumber(n) {
    let a2 = 1;
    let a3 = 1;
    let a5 = 1;
    let nextU2 = 1;
    let nextU3 = 1;
    let nextU5 = 1;
    let ugly = 1;
    let uglys = [1];
    // let nextUgly
    for(let i = 1; i < n; i++) {
        ugly = Math.min(nextU2 * 2, nextU3 * 3, nextU5 * 5);
        uglys.push(ugly);
        if (ugly === nextU2 * 2) {
            nextU2 = uglys[a2++];            
        }
        if (ugly === nextU3 * 3) {
            nextU3 = uglys[a3++];
        }
        if (ugly === nextU5 * 5) {
            nextU5 = uglys[a5++];
        }
    }
    return ugly;
}

// console.log(nthUglyNumber(150));

// Catalan Number 

// bell numbers
function s(n, m) { 
    if (m === 1) return 1;
    if (m === n) return 1;
    return s(n - 1, m - 1) + m * s(n - 1, m);
}
// with memo
function sWithCache(n, m) {
    let cache = {};
    function s(n, m) {
        if (m === 1) return 1;
        if (m === n) return 1;
        if (cache[`${n},${m}`]) return cache[`${n},${m}`];
        let res = s(n - 1, m - 1) + m * s(n - 1, m);
        cache[`${n},${m}`] = res;
        return res;
    }
    return s(n, m);
}

function bellNumber(n) {
    if (n === 0 || n === 1 ) return n;
    let bell = 0;
    console.time('xxx');
    for(let i = 1; i <= n; i++) {
        bell = sWithCache(n, i) + bell;
    }
    console.timeEnd('xxx');
    return bell;
}
// console.log(bellNumber(24))

/**coin-change
 *  N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}.
 * So output should be 4
 * For N = 10 and S = {2, 5, 3, 6}, there are five solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}.
 *  So the output should be 5.
 *  */
function coinChange(n, set) {
    

}