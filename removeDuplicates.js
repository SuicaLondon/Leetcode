/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
	let counter = 1

    if (nums.length === 1) {
        return counter
    }

	for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
            counter++
        }
    }
	return counter
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
