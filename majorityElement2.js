/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
	let map = new Map()
	for (let num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1)
		} else {
			map.set(num, 1)
		}
	}
	let list = []
	for (let num of map) {
		if (num[1] > (nums.length / 3)) {
			list.push(num[0])
		}
	}
	return list
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([1]))
console.log(majorityElement([1, 2]))
