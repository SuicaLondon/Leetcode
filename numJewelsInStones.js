/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 let numJewelsInStones = function (jewels, stones) {
    let counter = 0
    for (let i = 0; i < jewels.length; i++) {
        counter += stones.split(jewels[i]).length - 1
    }
    return counter
}

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))