/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
	const pair = {
		'{': '}',
		'}': '{',
		'(': ')',
		')': '(',
		'[': ']',
		']': '[',
	}
    let parentheses = []
	for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c === '{' || c === '[' || c==='(') {
            parentheses.push(c)
        } else {
            if (pair[c] === parentheses[parentheses.length-1]) {
                parentheses.pop()
            } else {
                return false
            }
        }
    }
    if (parentheses.length === 0) {
        return true
    } else { 
        return false
    }
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))