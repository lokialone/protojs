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

// console.log(intersect1([3,1,2], [1,1]))

/** 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 示例 2:
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 实例3：
 * 输入： [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 * 输出： [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */

//原来以为是个傻逼问题，但仔细一想类似大数想加问题
var plusOne = function(digits) {
    let n = digits.length - 1
    while ((digits[n] = digits[n] + 1) && digits[n] >= 10)  {
        digits[n] = 0
        if (n === 0) {
            digits.unshift(1)
            break
        }
        n --
    }
    return digits
};
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

/**给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * /
 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let notZero = 0;
    nums.forEach((v) => {
        if (v !== 0) {
            nums[notZero++] = v
        }
    })
    nums.fill(0, notZero)
};

// moveZeroes([0,1])


/** 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的 两个整数。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0, len =  nums.length; i < len - 1; i++) {
        for(let j = i + 1; j < len;j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
// 使用对象存储， 需要的值为key, index 为value
var twoSum1 = function(nums, target) {
    let store = {}
    for(let i = 0, len = nums.length; i < len; i++) {
        let v = nums[i]
        if (store[v] !== undefined) return [store[v],i]
        store[target -v] = i
    }
    console.log(store)
};

// console.log(twoSum1([2, 7, 11, 15], 9))


/**判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次
 * 数字 1-9 在每一列只能出现一次
 * 数字 1-9 在每一个以粗实线分隔的 3x3宫内只能出现一次
 * 数独部分空格内已填入了数字，空白格用 '.' 表示
 * 输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
 */

 /**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 检查列
    let column = {}
    // 检查3*3
    let box = {}
    
    for (let i = 0; i < 9; i++) {
        // 检查行
        let row = {} 
        let boxIndex = Math.floor(i / 3)
        if (!box[boxIndex]) box[boxIndex] = {}
        for (let j = 0; j < 9; j++) {
            let v = board[i][j]
            let boxIndexJ = Math.floor(j / 3)
            if (v === '.') continue

            
            if (row[v]) return false
            if (column[j] && column[j][v]) return false
            if (box[boxIndex][boxIndexJ] && box[boxIndex][boxIndexJ][v]) return false
            row[v] = 1
            if (!column[j]) column[j] = {}
            column[j][v] = 1
            if (!box[boxIndex][boxIndexJ]) box[boxIndex][boxIndexJ] = {}
            box[boxIndex][boxIndexJ][v] = 1
        }
        
    }
    return true
};

// console.log(isValidSudoku([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]]))
// console.log(isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]))
// https://blog.csdn.net/biezhihua/article/details/79648015
var isValidSudoku1 = function(board) {
    var set ={};
    for(var i=1;i<=9;i++) set[i]=[];
    
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var s=board[i][j];
            if(Number(s)){
                var index = parseInt(i/3)*3+parseInt(j/3);
                for(var k=0;k<set[s].length;k++){
                    if(i==set[s][k][0]||j==set[s][k][1]||index==set[s][k][2])
                        return false;
                }
                set[s].push([i,j,index]);
            }
        }
    }
    return true;
};

/** 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 * 说明：
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 示例 1:
 * 给定 matrix =
 * [
 *  [1,2,3],
 *  [4,5,6],
 * [7,8,9]
 * ],
 * 原地旋转输入矩阵，使其变为:
 * [
 *  [7,4,1],
 * [8,5,2],
 * [9,6,3]
 * ]
 * 给定 matrix =
 * [
 *  [ 5, 1, 9,11],
 *  [ 2, 4, 8,10],
 *  [13, 3, 6, 7],
 *  [15,14,12,16]
 * ], 
 * 原地旋转输入矩阵，使其变为:
 * [
 *  [15,13, 2, 5],
 *  [14, 3, 4, 1],
 *  [12, 6, 8, 9],
 *  [16, 7,10,11]
 * ]
 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 解析：http://www.cnblogs.com/chrischennx/p/4009376.html
var rotate = function(matrix) {
    
};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))
