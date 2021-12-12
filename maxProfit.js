/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
	let min = prices[0]
	let profit = 0
	for (let i = 1; i < prices.length; i++) {
		let price = prices[i]
        min = min > price ? price : min
        profit = profit < price - min ? profit = price - min : profit
	}
	return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))
