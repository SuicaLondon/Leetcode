/**
 * @param {string} s
 * @return {string}
 */
let toLowerCase = function (s) {
	let str = ''
	for (let i = 0; i < s.length; i++) {
			str += (s[i] >= 'A' && s[i] <= 'Z') ? String.fromCharCode(s[i].charCodeAt(0) + 32) : s[i]
	}
    return str
}

console.log(toLowerCase('Hello'))
console.log(toLowerCase('here'))
console.log(toLowerCase('LOVELY'))
