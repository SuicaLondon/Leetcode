/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    s = s.trim()
    let lastWord = ""
    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            break
        }
        lastWord = s[i] + lastWord
    }
    return lastWord.length
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))