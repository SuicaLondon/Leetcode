/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function (nums) {
	let first = nums[0]
	let second, third
	for (let i = 1; i < nums.length; i++) {
		let num = nums[i]
		if (num > first) {
            third = second
			second = first
			first = num
		} else if (num === first) {
			continue
		} else if (num > second || !second) {
			third = second
			second = num
		} else if (num === second) {
			continue
		} else if (num > third || !third) {
			third = num
		}
        console.log(first, second, third)
	}
	return third === undefined ? first : third
}

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([2, 1]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([1, 2, 2]))
console.log(thirdMax([1,-2147483648,2]))
console.log(thirdMax([3,3,4,3,4,3,0,3,3]))