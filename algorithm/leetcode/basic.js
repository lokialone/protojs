/**
 * 1.从排序数组中删除重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
*/
// var numsc = [1,1,2,2,3,4,5,7,7]
// var removeDuplicates = function(nums) {
//     let set = new Set(nums)
//     nums = nums.splice(1,2)
//     console.log('dd', nums)
//     return nums.length
// };
// console.log(removeDuplicates(numsc))
// console.log(numsc)

var arr = [1,2,3]
var fun1 = function(arr) {
    arr[0] = 5
}
fun1(arr)
console.log(arr)