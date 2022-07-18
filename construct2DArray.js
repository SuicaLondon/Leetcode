/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
let construct2DArray = function (original, m, n) {
    if (original.length !== m * n) return []
    let list = [], index = 0
    for (let i = 0; i < m; i++) {
        let l = []
        for (let j = 0; j < n; j++) {
            l.push(original[index++])
        }
        list.push(l)
    }
    return list
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2))
console.log(construct2DArray([1, 2, 3], 1, 3))
console.log(construct2DArray([1, 2], 1, 1))
console.log(construct2DArray([3], 1, 2))