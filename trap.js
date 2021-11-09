/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function (height) {
	let leftMax = -1
	let rightMax = -1
	let volumn = 0
	let left = 0
	let right = height.length - 1
	while (left <= right) {
		leftMax = Math.max(leftMax, height[left])
		rightMax = Math.max(rightMax, height[right])

		if (height[left] < height[right]) {
			volumn += leftMax - height[left++]
		} else {
			volumn += rightMax - height[right--]
		}
	}
	return volumn
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([4, 2, 3]))
console.log(trap([5, 4, 1, 2]))
