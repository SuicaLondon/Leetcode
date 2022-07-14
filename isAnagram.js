/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let object = {}
    for (let i = 0; i < s.length; i++) {
        const l = s[i]
        if (object[l]) {
            object[l]++
        } else {
            object[l] = 1
        }
    }
    for (let i = 0; i < t.length; i++) {
        const l = t[i]
        if (object[l]) {
            if (object[l] === 1) {
                delete object[l]
            } else {
                object[l]--
            }
        } else {
            return false
        }
    }
    return Object.keys(object).length === 0
}


console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram("aa", "bb"))