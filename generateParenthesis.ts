function generateParenthesis(n: number): string[] {
	let list = []
	function backtrack(str: string, left: number, right: number): void {
		if (str.length === n * 2) {
			list.push(str)
			return
		}
		if (left < n) {
			backtrack(str + '(', left + 1, right)
		}
		if (right < left) {
			backtrack(str + ')', left, right + 1)
		}
	}
	backtrack('', 0, 0)
	return list
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
