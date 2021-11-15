/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map.has(num) && Math.abs(map.get(num) - i) <= k) {
            return true
        } else {
            map.set(num, i)
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
