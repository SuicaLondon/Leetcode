/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = function (s, t) {
	for (let i = 0; i < s.length || i < t.length; ) {
        if (s[i] !== '#' && t[i] !== '#') {
            i++
        } else {
            if (s[i] === '#') {
                s = s.slice(0, i - 1 > 0 ? i - 1 : 0) + s.slice(i + 1)
                i--
            }
            if (t[i] === '#') {
                t = t.slice(0, i - 1 > 0 ? i - 1 : 0) + t.slice(i + 1)
                i--
            }
        }
	}
	return s === t
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('ab##', 'c#d#'))
console.log(backspaceCompare('a##c', '#a#c'))
console.log(backspaceCompare('a#c', 'b'))
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'))
