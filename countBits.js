/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = function (n) {
    let list = [0]
    for (let i = 1; i < n; i++) {
        list[i] = list[i & (i - 1)] + 1
    }
    return list
}


console.log(countBits(2))
console.log(countBits(5))