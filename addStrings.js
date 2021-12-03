/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function (num1, num2) {
	let next = 0
	let sum = ''
	let i = num1.length - 1
	let j = num2.length - 1
	while (i >= 0 || j >= 0) {
		let n1 = i >= 0 ? parseInt(num1[i--], 10) : 0
		let n2 = j >= 0 ? parseInt(num2[j--], 10) : 0
		let s = n1 + n2 + next
		let ns = s % 10
		next = Math.floor(s / 10)
        console.log(sum, n1, n2, ns, next)
		sum = ns + sum
	}
    if (next > 0) {
        sum = next + sum
    }
	return sum
}

// console.log(addStrings('11', '123'))
// console.log(addStrings('456', '77'))
// console.log(addStrings('0', '0'))
// console.log(addStrings('9', '9'))
// console.log(addStrings('123456789', '987654321'))
console.log(addStrings('18582506933032752', '366213329703'))
