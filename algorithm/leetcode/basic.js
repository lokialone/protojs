/**
 * 1.从排序数组中删除重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
*/
// object 对象适合递归解法。数组有点牵强
var numsc = [1,1,2,2,3,4,5,7,7,9,9,9]

var removeDuplicates = function(nums) {
    var num = ''
    var k = 0
    while(k < nums.length) {
        if (nums[k] !== num) {
            num = nums[k]
        } else {
            k--
            nums.splice(k, 1)
        }
        k++
    }
    return nums.length 
}
/**
 * 
 * 双指针法
 * @param {}} nums 
 */
var removeDuplicates2 = function(nums) {

}

/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。
 * 你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let index = 0;
    let sum = 0;
    while(index < prices.length) {
        let tmp = prices[index + 1] - prices[index]
        if (tmp > 0) {
            sum += tmp
        }
        index++
    }
    return sum
   
};
/** test
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
*/
let test = [1,2,3,4,5]
console.log(maxProfit(test))



