/**
 * @param {string[]} ops
 * @return {number}
 */
let calPoints = function (ops) {
	let records = []
	for (let i = 0; i < ops.length; i++) {
		let op = ops[i]
		if (op === 'C') {
			records.pop()
		} else if (op === 'D') {
			let last = records[records.length - 1]
			records.push(last * 2)
		} else if (op === '+') {
            let last1 = records[records.length - 1]
            let last2 = records[records.length - 2]
            records.push(last1 + last2)
		} else {
			records.push(parseInt(op, 10))
		}
	}
    let sum = 0
    for (let i = 0; i < records.length; i++) {
        sum += records[i]
    }
    return sum
}

console.log(calPoints(['5', '2', 'C', 'D', '+']))
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']))
