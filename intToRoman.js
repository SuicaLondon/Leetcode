/**
 * @param {number} num
 * @return {string}
 */
 let intToRoman = function(num) {
    let minNumber = 1
    let maxNumber = 3999
    const keys = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    if (!Number.isInteger(num)) {
        return null
    }

    if (num < minNumber || num > maxNumber) {
        return null
    }

    let romanNumerals = ""
    for (let symbol in keys) {
        let symbolValue = keys[symbol]
        if (symbolValue <= num) {
            let coefficient = Math.floor(num / symbolValue)
            romanNumerals += symbol.repeat(coefficient)
            num = num - symbolValue * coefficient
        }
    }
    return romanNumerals
}

console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))