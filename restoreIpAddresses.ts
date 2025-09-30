function restoreIpAddresses(s: string): string[] {
	if (s.length < 4 || s.length > 12) return []
	if (s.length === 4) {
		return [s.split('').join('.')]
	}
	const result: string[] = []
	const backtrack = (startIndex: number, path: string[]): void => {
		if (path.length === 4) {
			if (startIndex === s.length) {
				result.push(path.join('.'))
			}
			return
		}
		for (let i = 1; i <= 3; i++) {
			if (startIndex + i > s.length) break
			const ipStr = s.slice(startIndex, startIndex + i)
			if (ipStr.length > 1 && ipStr[0] === '0') continue
			if (parseInt(ipStr) > 255) continue
			path.push(ipStr)
			backtrack(startIndex + i, path)
			path.pop()
		}
	}
	backtrack(0, [])
	return result
}

console.time('restoreIpAddresses')
console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('1111'))
console.log(restoreIpAddresses('010010'))
console.log(restoreIpAddresses('101023'))
console.timeEnd('restoreIpAddresses')
