function exist(board: string[][], word: string): boolean {
	const height = board.length
	const width = board[0].length
	const backtrack = (y: number, x: number, index: number): boolean => {
		if (index === word.length) return true
		if (
			y < 0 ||
			y >= height ||
			x < 0 ||
			x >= width ||
			board[y][x] !== word[index]
		) {
			return false
		}
		const temp = board[y][x]
		board[y][x] = '#'
		const result =
			backtrack(y + 1, x, index + 1) ||
			backtrack(y - 1, x, index + 1) ||
			backtrack(y, x + 1, index + 1) ||
			backtrack(y, x - 1, index + 1)
		board[y][x] = temp
		return result
	}

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (board[i][j] === word[0]) {
				if (backtrack(i, j, 0)) {
					return true
				}
			}
		}
	}
	return false
}

console.log(
	exist(
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E'],
		],
		'ABCCED'
	)
)
console.log(
	exist(
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E'],
		],
		'SEE'
	)
)
console.log(
	exist(
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E'],
		],
		'ABCB'
	)
)
