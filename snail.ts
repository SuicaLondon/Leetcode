export {}
declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount != this.length) return []
    const newList: number[][] = [];
    function add(rowIndex: number, num: number) {
        if (newList[rowIndex] === undefined) {
            newList[rowIndex] = [num]
        } else {
            newList[rowIndex].push(num)
        }
    }
    for (let i = 0; i < colsCount; i++) {
        for (let j = 0; j < rowsCount; j++) {
            let rowIndex = i % 2 == 0 ? j : rowsCount - j - 1
            let index = i * rowsCount + j
            add(rowIndex, this[index])
        }
    }
    return newList
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */


console.log(
     [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4))

     console.log([1,3].snail(2, 2))
