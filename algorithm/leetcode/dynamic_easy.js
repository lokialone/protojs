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

// console.log(climbStairs(5));

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max_profit = 0;
    for (let i = 0; i < prices.length; i++) {
       if (prices[i] < min) {
          min = prices[i];
       } else {
          let profit = prices[i] - min;
          max_profit = Math.max(profit, max_profit);
       }
    }
    return max_profit;
};

// console.log(maxProfit1([7,1,5,3,6,4]))//5
// console.log(maxProfit1(7,6,4,3,1)) //0

// Given an integer array nums, find the contiguous subarray (containing at least one number)
//  which has the largest sum and return its sum.
// 最大子序和
/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function(nums) {
   let max = nums[0];
   let maxL = nums[0];
   for(let i = 1; i < nums.length; i++) {
      if (maxL + nums[i] > nums[i]) {
         maxL = maxL + nums[i]
      } else {
         maxL = nums[i]
      }
      if (maxL > max) max = maxL;
   }
   return max;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));//6



// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint stopping you 
// from robbing each of them is that adjacent houses have security system connected and it
// will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine
//  the maximum amount of money you can rob tonight without alerting the police.
// 打家劫舍
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   let before = 0;
   let next_cannot = 0;
   nums.forEach((item) => {
      let tmpNext_cannot = next_cannot;
      next_cannot = item + before;
      before = tmpNext_cannot > before ? tmpNext_cannot : before;
   })
   return before > next_cannot ? before : next_cannot;
};
// rob第一次写法改进
var rob1 = function(nums) {
   let before = 0;
   let next_cannot = 0;
   nums.forEach((item) => {
      let tmpNext_cannot = next_cannot;
      next_cannot = item + before;
      before = tmpNext_cannot > before ? tmpNext_cannot : before;
   })
   return before > next_cannot ? before : next_cannot;
};
// 网上看的版本
var rob2 = function(nums) {
   let before = 0;
   let next_cannot = 0;
   nums.forEach((item) => {
      let tmpNext_cannot = next_cannot;
      next_cannot = item + before;
      before = tmpNext_cannot > before ? tmpNext_cannot : before;
   })
   return before > next_cannot ? before : next_cannot;
};


console.log(rob([1,2,3,1]))//4
console.log(rob([2,7,9,3,1]))//12
console.log(rob([2,1,1,2]))//4