function islandPerimeter(grid: number[][]): number {
	let perimeter = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				if (i === 0 || grid[i - 1][j]! === 0) perimeter++
				if (j === 0 || grid[i][j - 1]! === 0) perimeter++
				if (i === grid.length - 1 || grid[i + 1][j]! === 0) perimeter++
				if (j === grid[i].length - 1 || grid[i][j + 1]! === 0) perimeter++
			}
		}
	}
	return perimeter
}

console.log(
	islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
)
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1, 0]]))
