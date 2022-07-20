/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
let busyStudent = function (startTime, endTime, queryTime) {
    let index = 0, count = 0
    while(index < startTime.length) {
        if (startTime[index] <= queryTime && endTime[index] >= queryTime) count++
        index++
    }
    return count
}

console.log(busyStudent([1,2,3], [3,2,7], 4))
console.log(busyStudent([4], [4], 4))