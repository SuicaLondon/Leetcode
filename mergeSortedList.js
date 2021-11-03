/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
	let i = m - 1,
		j = n - 1,
		k = m + n - 1
	while (i >= 0 && j >= 0) {
		if (nums2[j] > nums1[i]) {
			nums1[k--] = nums2[j--]
		} else {
			nums1[k--] = nums1[i--]
		}
	}
	while (j >= 0) {
		nums1[k--] = nums2[j--]
	}
	return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([2, 0], 1, [1], 1))
