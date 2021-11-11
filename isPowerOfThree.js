/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function (n) {
	if (n === 1) return true
	if (n < 3) return false
	while (Number.isInteger(n) && n > 1) {
		n /= 3
	}
	return n === 1
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(45))
