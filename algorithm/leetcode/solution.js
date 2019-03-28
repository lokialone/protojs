// 双指针法

/**
 * 1.从排序数组中删除重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
*/
let removeDuplicates2 = function(nums) {
    let first = nums[0]
    let diff = 0
    for(let i = 1, len = nums.length; i < len; i++ ) {
        if (nums[i] !== first) {
            diff++
            nums[diff] = nums[i]
            first = nums[i]
        }
    }
    console.log(nums)
    console.log(diff)
}


// 2.给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
};

