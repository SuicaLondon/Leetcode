/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr = function (s, k) {
    s = s.split('')
	let i = 0
	while (i < s.length) {
		for (let j = 0; j < k / 2; j++) {
			let index = i + j
			;[s[index], s[i + k - j - 1]] = [s[i + k - j - 1], s[index]]
		}
		i = i + 2 * k
	}
	return s.join('')
}

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))
