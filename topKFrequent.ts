function topKFrequent(nums: number[], k: number): number[] {
	const freqMap: Map<number, number> = new Map()
	for (let i = 0; i < nums.length; i++) {
		const itemValue = nums[i]
		const existedValue = freqMap.get(itemValue)
		if (existedValue) {
			freqMap.set(itemValue, existedValue + 1)
		} else {
			freqMap.set(itemValue, 1)
		}
	}
	const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1])
	return sorted.slice(0, k).map((item) => item[0])
}
