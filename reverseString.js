/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
    let length = s.length
	for (let i = 0; i < length / 2; i++) {
		[s[i], s[length - i - 1]] = [s[length - i - 1], s[i]]
	}
    return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
