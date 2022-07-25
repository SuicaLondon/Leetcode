/**
 * @param {number} area
 * @return {number[]}
 */
let constructRectangle = function (area) {
    let max = Math.floor(Math.sqrt(area))
    while (area % max !== 0) max--
    return [area / max, max]
}

console.log(constructRectangle(4))
console.log(constructRectangle(37))
console.log(constructRectangle(122122))