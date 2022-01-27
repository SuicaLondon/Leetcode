/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findMaxAverage = function (nums, k) {
    let sum = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (i < k) {
            sum += num
            max = sum
        } else {
            sum = sum - nums[i - k] + num
            max = Math.max(max, sum)
        }
    }
    return max / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([3, 3, 4, 3, 0], 3))
console.log(findMaxAverage([0, 1, 1, 3, 3], 4))
console.log(findMaxAverage([8, 0, 1, 7, 8, 6, 5, 5, 6, 7], 5))