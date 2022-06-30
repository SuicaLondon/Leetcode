/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
let rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        if (s === goal) {
            return true
        }
        s = s + s[0]
        s = s.substring(1)
    }
    return false
}

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))