/**
 * @param {string[]} logs
 * @return {number}
 */
let minOperations = function (logs) {
	let records = []
	for (let i = 0; i < logs.length; i++) {
		let log = logs[i]
		if (log === '../') {
			records.pop()
		} else if (log === './') {
		} else {
			records.push(log)
		}
	}
	return records.length
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
console.log(minOperations(['d1/', '../', '../', '../']))
