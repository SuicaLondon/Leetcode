/**
 * @param {number[]} nums
 * @return {string[]}
 */
let summaryRanges = function (nums) {
    let previous = null
    let str = ''
    let list = []
    for (let i = 0; i < nums.length; i++) {
        if (str !== '') {
            if (nums[i] !== previous + 1) {
                if (parseInt(str, 10) !== previous) {
                    str += '->' + previous
                }
                list.push(str)
                str = '' + nums[i]
                previous = nums[i]
                if (i === nums.length - 1) {
                    list.push(str)
                }
            } else {
                previous = nums[i]
                if (i === nums.length - 1) {
                    if (parseInt(str, 10) !== previous) {
                        str += '->' + previous
                    }
                    list.push(str)
                }
            }
        } else {
            previous = nums[i]
            str += nums[i]
            if (i === nums.length - 1) {
                list.push(str)
            }
        }
    }
    return list
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
console.log(summaryRanges([-1]))