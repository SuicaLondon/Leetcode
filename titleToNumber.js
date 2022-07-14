/**
 * @param {string} columnTitle
 * @return {number}
 */
let titleToNumber = function (columnTitle) {
    let result = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const letter = columnTitle[columnTitle.length - i - 1]
        const num = letter.charCodeAt() - 64
        result += num * 26 ** i
    }
    return result
}

console.log(titleToNumber('A'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))

