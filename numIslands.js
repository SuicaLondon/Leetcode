/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                markedIslandDiscovered(grid, i, j)
                count++
            }
        }
    }
    return count
}

function markedIslandDiscovered(grid, i, j) {
    if (grid[i][j] === '1') {
        grid[i][j] = '2'
        if (i < grid.length - 1) {
            markedIslandDiscovered(grid, i + 1, j)
        }
        if (j < grid[i].length - 1) {
            markedIslandDiscovered(grid, i, j + 1)
        }
        if (i > 0) {
            markedIslandDiscovered(grid, i - 1, j)
        }
        if (j > 0) {
            markedIslandDiscovered(grid, i, j - 1)
        }
    } else {
        return
    }
}


console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))
console.log(numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]))
// console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]))