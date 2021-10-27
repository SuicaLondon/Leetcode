/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
	let list = [0, 1, 2, 3, 5, 8, 13, 21]
    let element = 0
	for (let i = 6; i <= n; i++) {
		element = list[i - 1] + list[i - 2]
        list.push(element)
	}
	return list[n]
}

console.log(climbStairs(2))
console.log(climbStairs(3))
