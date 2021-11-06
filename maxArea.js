/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
	let max = 0,
		i = 0,
		j = height.length - 1
	while (j > i) {
		let h = Math.min(height[i], height[j])
		max = Math.max(h * (j - i), max)
		if (height[i] > height[j]) {
			j--
		} else {
			i++
		}
	}
	return max
}

console.log(maxArea([1, 1]))
console.log(maxArea([4, 3, 2, 1, 4]))
console.log(maxArea([1, 2, 1]))
