/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = function (n) {
    let list = [0]
    let offset = 1
    for (let i = 1; i < n; i++) {
        if (offset * 2 == i) {
            offset = i
        }
        list[i] = 1 + list[i - offset]
    }
    return list
}


console.log(countBits(2))
console.log(countBits(5))