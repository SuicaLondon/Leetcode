/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
	let set = new Set()
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i]
		if (set.has(num)) {
			set.delete(num)
		} else {
			set.add(num)
		}
	}
	return [...set][0]
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
