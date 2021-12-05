/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
	let grid = new Uint8Array(n),
		counter = 0
	for (let i = 2; i < n; i++) {
		if (grid[i]) continue
		counter++
		for (let mult = i * i; mult < n; mult += i) {
			grid[mult] = true
		}
	}
	return counter
}

console.log(countPrimes(10))
console.log(countPrimes(0))
console.log(countPrimes(1))
console.log(countPrimes(2))
