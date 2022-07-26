/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 let getMinDistance = function (nums, target, start) {
    let i = start, j = start
    while (true) {
        if (nums[i] === target) return Math.abs(start - i)
        if (nums[j] === target) return Math.abs(start - j)
        if (i < nums.length) i++
        if (j > 0) j--
    }
    return Math.abs(start - i)
}

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3))
console.log(getMinDistance([1], 1, 0))
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0))
console.log(getMinDistance([5, 3, 6], 5, 2))