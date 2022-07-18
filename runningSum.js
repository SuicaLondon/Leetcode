/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function (nums) {
    const list = []
    for (let i = 0; i < nums.length; i++) {
        list.push(list[i - 1] ? list[i - 1] + nums[i] : nums[i])
    }
    return list
}



console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))