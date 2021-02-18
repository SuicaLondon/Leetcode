/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
	let longestStrs = ''
	let strBuffer = ''
    if (strs.length === 0) { return longestStrs}
	for (let i = 0; i < 200; i++) {
		for (let j = 0; j < strs.length; j++) {
            if (!strs[j][i]) {
                return longestStrs
            }
			if (j === 0) {
				strBuffer = strs[j][i]
			}

			if (strBuffer !== strs[j][i]) {
				return longestStrs
			}

			if (j === strs.length - 1) {
				longestStrs += strBuffer
			}
		}
	}
	return longestStrs
}
console.log(longestCommonPrefix(['']))
// console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
