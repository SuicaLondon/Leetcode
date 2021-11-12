/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	if (nums.length < 2) {
		return nums
	}
    let arranged = 0
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === 0 && nums[i+1] !== 0) {
			for (let j = i + 1; j < nums.length - arranged; j++) {
                [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]
                if (j === nums.length - arranged - 1) {
                    arranged++
                }
            }
		}
	}
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))