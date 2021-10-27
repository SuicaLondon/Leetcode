/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
	if (x == 0) {
		return 0
	}
	if (x <= 2) {
		return 1
	}
	let num = 1
	while (num < x) {
		if (num * num > x) {
			return num - 1
		} else if (num * num == x) {
			return num
		}
		num++
	}
}

console.log(mySqrt(4))
console.log(mySqrt(8))
