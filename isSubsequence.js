/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 let isSubsequence = function (s, t) {
    if (s === t) return true
    let i = 0
    for (let j = 0; j < t.length; j++) {
        if (t[j] === s[i]) {
            i++
        }
        if (i === s.length) {
            return true
        }
    }
    return false
}


console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))