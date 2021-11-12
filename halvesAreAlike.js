/**
 * @param {string} s
 * @return {boolean}
 */
let halvesAreAlike = function (s) {
	const vowels = {
		a: 'a',
		e: 'e',
		i: 'i',
		o: 'o',
		u: 'u',
		A: 'A',
		E: 'E',
		I: 'I',
		O: 'O',
		U: 'U',
	}
	let half = s.length / 2
	let list1 = s.substr(0, half)
	let list2 = s.substr(half, s.length)
	let result1 = 0
	let result2 = 0
	for (let i = 0; i < half; i++) {
		if (vowels[list1[i]]) {
			result1 += 1
		}
		if (vowels[list2[i]]) {
			result2 += 1
		}
	}
	return result1 === result2
}

console.log(halvesAreAlike('book'))
console.log(halvesAreAlike('textbook'))
console.log(halvesAreAlike('MerryChristmas'))
console.log(halvesAreAlike('AbCdEfGh'))
