/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let numJewelsInStones = function (jewels, stones) {
    let counter = 0
    for (let stone of stones) {
        if (jewels.includes(stone)) {
            counter++
        }
    }
    return counter
}

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))