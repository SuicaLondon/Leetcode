// function topKFrequent(nums: number[], k: number): number[] {
// 	const freqMap: Map<number, number> = new Map()
// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i]
// 		freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
// 	}
// 	const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1])
// 	return sorted.slice(0, k).map((item) => item[0])
// }

function topKFrequent(nums: number[], k: number): number[] {
	const freqMap: Map<number, number> = new Map()
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
	}
	const buckets: number[][] = Array.from({ length: nums.length }, () => [])
	for (const [num, freq] of Array.from(freqMap.entries())) {
		buckets[freq].push(num)
	}

	const result: number[] = []
	for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
		for (const num of buckets[i]) {
			result.push(num)
			if (result.length === k) break
		}
	}
	return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
