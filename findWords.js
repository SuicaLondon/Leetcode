/**
 * @param {string[]} words
 * @return {string[]}
 */

const first = 'qwertyuiop'
const second = 'asdfghjkl'
const third = 'zxcvbnm'
let findWords = function (words) {
    let list = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (word.length < 2) {
            list.push(word)
            continue
        }
        const line = getLine(word[0].toLowerCase())
        for (let j = 1; j < word.length; j++) {
            if (!line.includes(word[j].toLowerCase())) {
                break
            } else {
                if (j === word.length - 1) {
                    list.push(word)
                }
            }
        }
    }
    return list
}

function getLine(character) {
    if (first.includes(character)) return first
    if (second.includes(character)) return second
    if (third.includes(character)) return third
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf", "sfd"]))
console.log(findWords(["a", "b"]))