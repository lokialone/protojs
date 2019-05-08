// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.


/**
 * @param {number} n
 * @return {number}
 */
// 非常正统的使用线性规划的方法，但是看别人的答案都比我简介。。。忧伤。
var climbStairs = function(n) {
   if (n < 2) return n;
   let a = [];
   for (let i = 0; i <= n; i++) {
      a[i] = [];
      for (let j = 0; j <= n; j++) {
         if (i === 0 || j === 0) {
            a[i][j] = 0
         } else if (i === j || i === 2 * j) {
            a[i][j] = 1;
         } else if (i < j || i > 2 * j) {
            a[i][j] = 0;
         } else {
            a[i][j] = a[i-2][j-1] + a[i-1][j-1];
         } 
      }
   }
   let res = 0;
   for(let i = 0; i <= n; i++) {
      res += a[n][i];
   }
   return res;
};
// others
var climbStairs1 = function (n) {
   if (n < 1)
       return 0;
   var mem = new Array(n + 1);
   mem[0] = 1;
   mem[1] = 1;
   mem[2] = 2;
   for (var i = 3; i <= n; i++) {
       mem[i] = mem[i - 1] + mem[i - 2];
   }
   return mem[n];
};

/*  这道题 并不等价于 方程 x + 2y = n 有多少组解, 因为还涉及排序 ;
 按这个思路，又要解方程，又要考虑排序，卒， 此思路必然是有毛病的。
 那么以下这个递归就非常漂亮，但要注意缓存啊！缓存可以避免重复计算。
*/
var climbStairs2 = function calculator(n) {
   // 1: 1
   // 2: 2
   // 3: 3
   if (n < 4) {
       return n;
   }
   
   calculator.cache = calculator.cache || [];
   
   if (calculator.cache[n]) return calculator.cache[n];
   
   calculator.cache[n] = calculator(n-1) + calculator(n-2)
   
   return calculator.cache[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs3 = function(n) {
   var dp=[];
    dp[1] = 1;
    dp[2]=2;
   
   for(var i=3;i<=n;i++){
       dp[i]=dp[i-1]+dp[i-2];
   }
   return dp[n];
   
};

console.log(climbStairs(5));