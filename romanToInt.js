/**
 * @param {string} s
 * @return {number}
 */
const roman = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}
let romanToInt = function (s) {
	let sum = 0
	let isTail = true
	for (let i = s.length - 1; i >= 0; i--) {
		let currentString = s[i]
		if (isTail && currentString !== 'I') {
			isTail = false
		}
		let currentNum = roman[s[i]]
		if (!isTail && i - 1 >= 0 && roman[s[i - 1]] < currentNum) {
			currentNum -= roman[s[i - 1]]
			// jump
			i--
		}
		sum += currentNum
	}
	return sum
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
