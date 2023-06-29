type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (Array.isArray(item)) {
                arr.splice(i, 1, ...item)
                i += item.length - 1
            }
        }
    }
    return arr
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2))