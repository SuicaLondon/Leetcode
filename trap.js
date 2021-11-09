/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function (height) {
	let start
	let pool = []
	let volumn = 0
	function add(a, b) {
		return a + b
	}

	function minIndex(list) {
		if (list.length < 1) {
			return list.length - 1
		}
		let min = list[0]
		let index = 0
		for (let i = 0; i < list.length; i++) {
			if (list[i] < min) {
				min = list[i]
				index = i
			}
		}
		return index
	}

	for (let i = 0; i < height.length; i++) {
		let h = height[i]
		if (h !== 0 && !start) {
			start = h
			for (let j = i + 1; j < height.length; j++) {
				let he = height[j]
				if (he < start) {
					pool.push(start - he)
					if (j === height.length - 1) {
						let index = minIndex(pool)
						let min = pool[index]
						if (index > 0 && index < height.length) {
							pool = pool
								.slice(0, index)
								.map((item) => item - min)
							volumn += pool.reduce(add, 0)
							i = i + index - 1
						}
						pool = []
						start = null
						break
					}
				} else {
					volumn += pool.reduce(add, 0)
					pool = []
					start = null
					i = j - 1
					break
				}
			}
		}
	}
	return volumn
}

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(trap([4, 2, 0, 3, 2, 5]))
// console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([4, 2, 3]))
console.log(trap([5, 4, 1, 2]))
