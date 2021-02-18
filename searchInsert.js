/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
	let start = 0
	let end = nums.length - 1
	if (target < nums[0]) {
		nums.unshift(target)
		return 0
	} else if (target > nums[nums.length - 1]) {
		nums.push(target)
		return nums.length - 1
	}
	while (start <= end) {
		let mid = Math.floor((end + start) / 2)
		console.log('----')
		console.log(start, mid, end)
		console.log(nums[mid - 1], nums[mid], nums[mid + 1], target)
		if (nums[mid] > target) {
			if (nums[mid - 1] < target) {
				nums.splice(mid, 0, target)
				return mid
			} else {
				end = mid - 1
			}
		} else if (nums[mid] < target) {
			if (nums[mid + 1] > target) {
				nums.splice(mid + 1, 0, target)
				return mid + 1
			} else {
				start = mid + 1
			}
		} else {
			return mid
		}
	}
}

// console.log(searchInsert([1, 3, 5, 6], 5))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
// console.log(searchInsert([1, 3, 5, 6], 0))
// console.log(searchInsert([1], 0))
// console.log(searchInsert([1, 4, 6, 7, 8, 9], 6))
// console.log(searchInsert([3, 5, 7, 9, 10], 8))
console.log(searchInsert([1, 3], 2))
// console.log(searchInsert([1, 2, 4, 6, 7], 3))
