/**
 * @param {string[]} logs
 * @return {number}
 */
let minOperations = function (logs) {
	let result = 0
	for (let i = 0; i < logs.length; i++) {
		let log = logs[i]
		if (log === '../') {
			if (result !== 0) result--
		} else if (log === './') {
			continue
		} else {
			result++
		}
	}
	return result
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
console.log(minOperations(['d1/', '../', '../', '../']))
