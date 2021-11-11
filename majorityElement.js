/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    let max
    for(let num of map) {
        if (!max || num[1] > max[1]) {
            max = num
        }
    }
    return max[0]
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
