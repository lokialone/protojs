/**The maximum sum subarray problem consists in finding the maximum 
* sum of a contiguous subsequence in an array or list of integers:
* maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
* should be 6: [4, -1, 2, 1]
* Easy case is when the list is made up of only positive numbers and the 
* maximum sum is the sum of the whole array. If the list is made up of only negative numbers,
* return 0 instead.
* Empty list is considered to have zero greatest sum. Note that the empty list
* or array is also a valid sublist/subarray.
*/

let arr = [9, 1, 9, 4, -1, 2, 1, -5, -4];

//解法一
//思路： 从数组的第一位开始遍历，将第一位的值依次与后面的一位，二位，三位。n位叠加，遍历获得最大substring最大值。
var maxSequence = function(arr){
    let sum = 0;
    let tmpSum = 0;
    if (!arr.length) return 0;
    for(let i = 0, len = arr.length; i < len; i++) {
        sum = sum > arr[i] ? sum : arr[i];
        tmpSum = arr[i];
        for(let j = i + 1; j < len; j++) {
            tmpSum += arr[j];
            sum = sum > tmpSum ? sum : tmpSum;
        }
    }
    return sum > 0 ? sum: 0;
}

//解法二 others
var maxSequence2 = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

console.log(maxSequence2(arr));