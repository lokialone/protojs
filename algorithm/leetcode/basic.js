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

var removeDuplicates2 = function(nums) {

}


