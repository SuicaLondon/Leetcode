function sortBy(arr: any[], fn: Function): any[] {
    if (arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) < fn(pivot)) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return sortBy(left, fn).concat([pivot], sortBy(right, fn));
}

console.log(sortBy([5, 4, 1, 2, 3], (x) => x))
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x))
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]))
