// 0418 0423 0512 https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:

// 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
var lengthOfLIS = function(nums) {
    const len = nums.length;
    if (!len) return 0
    const memo = {};
    function dp(start) {
        if (memo[start]!== undefined) return memo[start];
        if (start > len) return 0;
       
        let res = 0;
        let startNumber = nums[start];
        for(let i = start + 1; i< len; i++) {
            let sub = nums[i] >= startNumber ? dp(i) + 1 : dp(i);
            res = Math.max(sub, res);
        }
        memo[start] = res;
        return res;
    }
    return dp(0) + 1;
};

var lengthOfLIS2 = function(nums) {
    let len = nums.length;
    const dp = Array(len).fill(1);
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] +1, dp[i]);
        }
    }
    return dp.reduce((acc, current) => {
        return acc > current ? acc : current;
    });  
};
// console.log('xxx', lengthOfLIS2([2,5,3,7]));

// 0520  给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符
// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

 function Array2d(row,column, value = 0) {
    let arr = new Array(row);
    for(let i = 0; i <row; i++) {
        arr[i] = new Array(column).fill(value)
    }
    return arr;
 }
var minDistance = function(word1, word2) {
    let c = word1.length + 1;
    let r = word2.length  + 1;
    let dp = Array2d(r,c, 0);
    
     for (let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if (j === 0) dp[i][j] = i;
            if (i === 0) dp[i][j] = j;
        }
     }
     
    
    for (let i =1; i < r; i++) {
        for(let j = 1; j < c; j++) {
            if (word1[j-1] === word2[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                // 比较 插入，replace , 删除的大小
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
        }
    }
    return dp[r-1][c-1];
};

// console.log(minDistance('intention', 'execution'));

// 最长增长子序列复习   0523
function lengthOfLIS3(arr) {
    let dp = [];
    let len =  arr.length
    for(let i = 0; i < len; i++) {
        if(i === 0) {
            dp[i] =1;
            continue;
        }
        let max = 1;
        for(let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                max = Math.max(dp[j] +1, max);
            }
        }
        dp[i] = max;
    }
    return dp[len - 1];
}
// console.log('xxx', lengthOfLIS3([2,5,3,7]));
// 0523 01背包问题
// 给你一个可装载重量为 W 的背包和 N 个物品，
// 每个物品有重量和价值两个属性。其中第 i 个物品的重量为 wt[i]
// ，价值为 val[i]，现在让你用这个背包装物品，最多能装的价值是多少？
// N = 3, W = 4
// wt = [2, 1, 3]
// val = [4, 2, 3]
function backpack(n, w, wt, val) {
    let dp = Array2d(n+1, w, 0);
    for(let j = 1; j < w; j++) {
        for (let i = 1; i < n + 1; i++) {
            if (wt[i-1] <= j) {
                dp[i][j] = Math.max(val[i-1] + dp[i-1][j - wt[i-1]], dp[i -1][j] );
            } else {
                dp[i][j] = dp[i-1][j];
               
            }
        }
    }
    
    return dp[n][w-1];
}
console.log(backpack(3, 4, [2,1,3], [4,2,3]))