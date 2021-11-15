/**
 * @param {number} num
 * @return {number}
 */
let addDigits = function (num) {
	let str = num.toString()
	let nextNumber = 0
	for (let i = 0; i < str.length; i++) {
		nextNumber += parseInt(str[i], 10)
	}
    if (nextNumber >= 10) {
        return addDigits(nextNumber)
    } else {
        return nextNumber
    }
}

console.log(addDigits(38))
console.log(addDigits(0))
