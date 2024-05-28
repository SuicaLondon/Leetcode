function threeSum(nums: number[]): number[][] {
	if (nums.length < 3) return []

	nums.sort((a, b) => a - b)
	const result: number[][] = []
	const set = new Set()
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right]

			if (sum === 0) {
				const key = `${nums[i]},${nums[left]},${nums[right]}`
				if (!set.has(key)) {
					set.add(key)
					result.push([nums[i], nums[left], nums[right]])
				}
				left++
			} else if (sum < 0) {
				left++
			} else {
				right--
			}
		}
	}
	return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))
