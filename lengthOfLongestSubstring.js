/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let b = {}
	let length = 0
	for (let i = 0; i < s.length; i++) {
		let currentChar = s[i]
		if (b[currentChar] !== undefined) {
			length = Math.max(length, Object.keys(b).length)
			let deletedIndex = b[currentChar]
			for (let c in b) {
				if (b[c] < deletedIndex) {
					delete b[c]
				} else if (b[c] === deletedIndex) {
					delete b[c]
					break
				}
			}
			b[currentChar] = i
		} else {
			b[currentChar] = i
			length = Math.max(length, Object.keys(b).length)
		}
	}
	return length
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring(''))
// console.log(lengthOfLongestSubstring('aab'))
// console.log(lengthOfLongestSubstring('dvdf'))
