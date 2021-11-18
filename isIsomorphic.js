/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function (s, t) {
	let sMap = new Map()
	let tMap = new Map()
	for (let i = 0; i < s.length; i++) {
        if(sMap.get(s[i])!== tMap.get(t[i])) return false
        sMap.set(s[i], i)
        tMap.set(t[i], i)
	}
    return true
}
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
