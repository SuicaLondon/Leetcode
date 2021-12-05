/**
 * @param {number} n
 * @return {boolean}
 */
let isUgly = function (n) {
	if (n < 1) return false
	function checkPrimeFactors(num) {
		if (num === 1) {
			return true
		}
		if (num % 2 === 0) {
			return checkPrimeFactors(num / 2)
		} else if (num % 3 === 0) {
			return checkPrimeFactors(num / 3)
		} else if (num % 5 === 0) {
			return checkPrimeFactors(num / 5)
		} else {
			return false
		}
	}
	return checkPrimeFactors(n)
}

console.log(isUgly(6))
console.log(isUgly(8))
console.log(isUgly(14))
console.log(isUgly(1))
