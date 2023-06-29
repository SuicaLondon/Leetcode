export { };
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    let map = {}
    for (let i = 0; i < this.length; i++) {
        let item = this[i]
        if (map[fn(item)] == null) {
            map[fn(item)] = [item]
        } else {
            map[fn(item)].push(item)
        }
    }
    return map
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
].groupBy(function (item) {
    return item.id;
}))
console.log([
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
].groupBy(function (list) {
    return String(list[0]);
}))

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(function (n) {
    return String(n > 5);
}))