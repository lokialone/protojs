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

// removeDuplicates2(numsc)

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


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
    let len = nums.length
    let tmp = k
    while(tmp > 0) {
        let n = nums[len - 1]
        nums.unshift(n)
        tmp--
    }
    nums.splice(len, k)
};

var rotate = function(nums, k) {
    reserve(nums, 0, nums.length-1)
    reserve(nums, 0, k - 1)
    reserve(nums, k, nums.length - 1)
    console.log(nums)
};

function reserve(nums, i, j) {
    while(i<j){
        swap(nums, i, j);
        i++;
        j--;
    }
}

function swap(nums, a, b) {
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
}

// rotate([1,2,3,4,5,6,7], 3)

/** 
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 输入: [1,2,3,1]
 * 输出: true
 * 输入: [1,2,3,4]
 * 输出: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 做人过于依赖set了
// 88 ms
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    return set.size !== nums.length
};
// 96 ms
var containsDuplicate1 = function(nums) {
    let map = {}
    return nums.some((item) => {
        if (map[item]) return true
        map[item] = true
    })
}; 
// 92ms 额，我的妈，Set效率这么高的么
var containsDuplicate2 = function(nums) {
    let map = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map[nums[i]]) return true
        map[nums[i]] = true
    }
    return false
};

// console.log(containsDuplicate2([1,2,3,1]))

/** 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 输入: [2,2,1]
 * 输出: 1
 * 输入: [4,1,2,1,2]
 * 输出: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}
    nums.forEach(item => {
        map[item] ?  map[item] = 2 : map[item] = 1    
    })
    return +Object.keys(map).find(item => map[item] === 1)
};
/*
* 相同的数字异或为0，这个题目感觉有点刻意。不太具备普遍规律
*/

var singleNumber1 = function(nums) {
   return nums.reduce((a, i) => a^i)
};

// console.log(singleNumber1([2,2,1,1,3]));

/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1:
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 示例 2:
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 * 说明：
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 * 进阶:
 * 如果给定的数组已经排好序呢？你将如何优化你的算法?
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 遍历nums1,如果nums2有相同的元素,将其值赋为false, 
 */
var intersect = function(nums1, nums2) {
    return nums1.reduce((a, i) => {
        let index = nums2.indexOf(i)
        if (index !== -1) {
            nums2[index] = false
            return a.concat(i)
        }
        return a
    }, [])
}

// 首先将nums1里有的数据遍历到一个对象里，然后遍历nums2 如果
var intersect1 = function(nums1, nums2) {
    let res = [], set = {}
    nums1.forEach(e => {
        set[e] = set[e] + 1 || 1
    })
    nums2.forEach(e => {
        if (set[e]) {
            res.push(e)
            set[e] -= 1
        }
    })
    return res
}

console.log(intersect1([3,1,2], [1,1]))
