function convert(s: string, numRows: number): string {
	if (numRows === 1) return s
	const rows: string[] = new Array(numRows).fill('')
	let currentRow = 0
	let goingDown = false

	for (let i = 0; i < s.length; i++) {
		rows[currentRow] += s[i]
		if (currentRow === 0 || currentRow === numRows - 1) {
			goingDown = !goingDown
		}
		currentRow += goingDown ? 1 : -1
	}
	return rows.join('')
}
