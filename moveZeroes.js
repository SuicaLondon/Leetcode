/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	if (nums.length < 2) {
		return nums
	}
    let arranged = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
            arranged++
            continue
		}
        if (arranged > 0) {
            nums[i - arranged] = nums[i]
            nums[i] = 0
        }
	}
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))