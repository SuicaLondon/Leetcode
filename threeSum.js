/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let len = nums.length
	nums = nums.sort((a, b) => a - b)
	let set = new Set()
	res = []
	if (len < 3) {
		return []
	}
	for (let i = 0; i < len; i++) {
		if (nums[i] == nums[i - 1]) continue
		let m = new Map()
		for (let j = i + 1; j < len; j++) {
            let sum = nums[i] + nums[j]
            if(m.has(-sum)) {
                set.add(`${nums[i]}, ${-sum}, ${nums[j]}`)
            }
            m.set(nums[j], j)
            
        }
    }
    for (let key of set) {
        res.push(key.split(","));
    }
	return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([]))
console.log(threeSum([0]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0, 0, 0, 0]))