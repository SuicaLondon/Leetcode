/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
	nums.sort((a, b) => b - a)
	return nums[k - 1] !== undefined ? nums[k - 1] : nums[0]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))


