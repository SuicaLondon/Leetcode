function generate(numRows: number): number[][] {
	let list = []
	for (let i = 0; i < numRows; i++) {
		let row = [1]
		for (let j = 1; j < i; j++) {
			const first = list[i - 1][j - 1] ?? 1
			const second = list[i - 1][j] ?? 1
			row.push(first + second)
		}
		if (i > 0) {
			row.push(1)
		}
		list.push(row)
	}
	return list
}

console.log(generate(5))
