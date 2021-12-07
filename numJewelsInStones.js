/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 let numJewelsInStones = function (jewels, stones) {
    let counter = 0
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            counter++
        }
    }
    return counter
}

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))