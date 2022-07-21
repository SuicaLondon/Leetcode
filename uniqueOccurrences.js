/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = function (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    }
    // let obj2 = {}
    // for (let o of Object.values(obj)) {
    //     if (obj2[o]) {
    //         return false
    //     } else {
    //         obj2[o] = 1
    //     }
    // }
    // return true
    let val = Object.values(obj)
    let unique = [...new Set(val)]
    return val.length === unique.length
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))