function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let index = 0
    let result: number[][] = []
    while (true) {
        let currentId = index + 1;
        let arr: number[]
        if (nums1[0] && nums1[0][0] == currentId) {
            arr = nums1.shift()
        }
        if (nums2[0] && nums2[0][0] == currentId) {
            let value = nums2.shift()
            arr = arr ? [arr[0], arr[1] + value[1]] : value
        }
        if (arr) {
            result.push(arr)
        }
        if (nums1.length == 0 && nums2.length == 0) break
        index++
    }
    return result
};

console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]))
console.log(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]))