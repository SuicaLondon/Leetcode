/**
 * @param {number} num
 * @return {string}
 */
let numberToWords = function (num) {
	if (num === 0) {
		return 'Zero'
	}
	const digits = {
		9: 'Nine',
		8: 'Eight',
		7: 'Seven',
		6: 'Six',
		5: 'Five',
		4: 'Four',
		3: 'Three',
		2: 'Two',
		1: 'One',
		0: '',
	}
	const tens = {
		90: 'Ninety',
		80: 'Eighty',
		70: 'Seventy',
		60: 'Sixty',
		50: 'Fifty',
		40: 'Forty',
		30: 'Thirty',
		20: 'Twenty',
		19: 'Nineteen',
		18: 'Eighteen',
		17: 'Seventeen',
		16: 'Sixteen',
		15: 'Fifteen',
		14: 'Fourteen',
		13: 'Thirteen',
		12: 'Twelve',
		11: 'Eleven',
		10: 'Ten',
	}
	const keys = {
		1000000000: 'Billion',
		1000000: 'Million',
		1000: 'Thousand',
		100: 'Hundred',
	}

	let words = ''
	let unit = 1
	let times
	while (true) {
		if (num / unit > 0 && num / unit < 1000) {
			times = Math.trunc(num / unit)
			break
		}
		unit *= 1000
	}
	let current = num
	let nextNumber = current - times * unit
	while (current > 0) {
		current = current - nextNumber
		if (current !== 0) {
			words = words + toWords(current / unit) + toUnitWords(unit)
		}
		current = nextNumber
		unit /= 1000
		nextNumber = current - Math.trunc(current / unit) * unit
	}

	function toUnitWords(unit) {
		return keys[unit] ? keys[unit] + ' ' : ''
	}

	function toWords(number) {
		let word = ''
		if (number >= 100) {
			let houndreds = Math.trunc(number / 100)
			word += digits[houndreds] + ' ' + keys[100] + ' '
			number -= houndreds * 100
		}
		if (number >= 20) {
			let ts = Math.trunc(number / 10)
			word += tens[ts * 10] + ' '
			number -= ts * 10
		}
		if (number >= 10) {
			word += tens[number] + ' '
			number = 0
		}
		if (number > 0) {
			word += digits[number] + ' '
		}
		return word
	}
	words = words.trim()
	return words
}

console.log(numberToWords(123))
console.log(numberToWords(12345))
console.log(numberToWords(1234567))
console.log(numberToWords(1234567891))
console.log(numberToWords(1000))
console.log(numberToWords(2000))
console.log(numberToWords(100000))
console.log(numberToWords(1000000))
console.log(numberToWords(1000010))
console.log(numberToWords(3055000))
console.log(numberToWords(1000000000))
