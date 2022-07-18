/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(i, matrix[i])
        let reuslt = binarySearch(matrix[i], target)
        console.log(reuslt)
        if (reuslt >= 0) return true
    }
    return false
}

function binarySearch(arr, val) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === val) {
            return mid
        }
        if (val < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1]], 0))
console.log(searchMatrix([[1]], 1))
console.log(searchMatrix([[1]], 2))
console.log(searchMatrix([[1, 3]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11))