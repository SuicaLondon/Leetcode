/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
    const total = nums1.length + nums2.length
    const half = Math.floor(total / 2)
    let a = nums1, b = nums2
    if (a.length > b.length) {
        [a, b] = [b, a]
    }
    let left = 0, right = a.length - 1
    while (true) {
        let aI = Math.floor((left + right) / 2)
        let bI = half - aI - 2
        let aLeft = aI >= 0 ? a[aI] : -Infinity
        let aRight = aI + 1 < a.length ? a[aI + 1] : Infinity
        let bLeft = bI >= 0 ? b[bI]: -Infinity
        let bRight = bI + 1 < b.length ? b[bI + 1] : Infinity
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 0) {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else {
                return Math.min(aRight, bRight)
            }
        } else if (aLeft > bRight) {
            right = aI - 1
        } else {
            left = aI + 1
        }
    }
}


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))