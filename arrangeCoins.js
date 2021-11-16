/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
	let index = 1
	let row = 0
	while (n > 0) {
		n -= index
		if (n < 0) {
			return row
		}
		index++
		row++
	}
	return row
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(6))
console.log(arrangeCoins(7))
