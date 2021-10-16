/**
 * @param {number[]} digits
 * @return {number[]}
 */
 let plusOne = function(digits) {
    let extraNum = 0
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    for(let i = digits.length - 1; i >= 0; i--) {
        let num = digits[i]
        if (extraNum !== 0) {
            num = num + extraNum
            extraNum = 0
        }
        if(num === 10) {
            if (i === 0) {
                num = 0
                digits[i] = num
                digits.unshift(1)
            } else {
                num = 0
                extraNum = 1
                digits[i] = num
            }
        } else {
            digits[i] = num
        }
    }
    return digits
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([0]))
console.log(plusOne([9]))
console.log(plusOne([8,9,9,9]))