function minDistance(word1: string, word2: string): number {
	if (word1.length === 0) return word2.length
	if (word2.length === 0) return word1.length
	const wordMap: Map<string, number> = new Map()
	function recursiveDistance(
		word1: string,
		word2: string,
		i: number,
		j: number
	): number {
		if (i === 0 && j === 0) return 0
		if (j === 0) return i
		if (i === 0) return j
		const key: string = `${i}-${j}`
		if (wordMap.has(key)) {
			return wordMap.get(key)
		}

		if (word1[i - 1] === word2[j - 1]) {
			const value: number = recursiveDistance(word1, word2, i - 1, j - 1)
			wordMap.set(key, value)
			return value
		}

		const dele: number = 1 + recursiveDistance(word1, word2, i - 1, j)
		const ins: number = 1 + recursiveDistance(word1, word2, i, j - 1)
		const rep: number = 1 + recursiveDistance(word1, word2, i - 1, j - 1)

		const min = Math.min(dele, ins, rep)
		wordMap.set(key, min)
		return min
	}
	return recursiveDistance(word1, word2, word1.length, word2.length)
}
