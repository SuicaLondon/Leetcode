/**
 * @param {number[]} salary
 * @return {number}
 */
let average = function (salary) {
    let sum = 0, max = 0
    let min = salary[0]
    for (let i = 0; i < salary.length; i++) {
        const s = salary[i]
        if (s > max) {
            max = s
        } else if (s < min) {
            min = s
        }
        sum += s
    }
    console.log(sum, min, max)
    sum = sum - min - max
    return sum / (salary.length - 2)
}

console.log(average([4000,3000,1000,2000]))
console.log(average([1000,2000,3000]))
console.log(average([8000,9000,2000,3000,6000,1000]))