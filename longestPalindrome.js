/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
    if (s === null || s.length < 1) return ''
    let result = "", length = 0

    function checkPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > length) {
                result = s.substring(left, right + 1)
                length = right - left + 1
            }
            left--
            right++
        }
    }

    for (let i = 0; i < s.length; i++) {
        let left = i, right = i
        checkPalindrome(left, right)
        left = i, right = i + 1
        checkPalindrome(left, right)
    }
    return result
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))