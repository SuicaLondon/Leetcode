/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
	let min = prices[0]
	let profit = 0
	for (let i = 1; i < prices.length; i++) {
		let price = prices[i]
		if (min > price) {
			min = price
		}
		if (profit < price - min) {
			profit = price - min
		}
	}
	return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))
