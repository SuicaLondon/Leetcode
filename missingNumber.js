/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function (nums) {
	let len = nums.length;
    let sum = len;
    for(let i = 0; i < len; i++) {
        sum = sum + i - nums[i];
    }
    return sum;
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([0]))
