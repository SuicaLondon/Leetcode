/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
let findPoisonedDuration = function (timeSeries, duration) {
    let count = 0
    for (let i = 1; i < timeSeries.length; i++) {
        time = timeSeries[i]
        if (timeSeries[i] - timeSeries[i - 1] > duration) {
            count += duration
        } else {
            count += timeSeries[i] - timeSeries[i - 1]
        }
    }
    count += duration
    return count
}

console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))
console.log(findPoisonedDuration([1], 2))
console.log(findPoisonedDuration([1,2,3,4,5,6,7,8,9], 1))