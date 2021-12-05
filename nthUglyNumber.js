/**
 * @param {number} n
 * @return {number}
 */
let nthUglyNumber = function (n) {
	if (n < 1) return
	let list = [1]
	let mo2 = 0,
		mo3 = 0,
		mo5 = 0
	for (let i = 1; i < n; i++) {
		list.push(Math.min(Math.min(list[mo2] * 2, list[mo3] * 3), list[mo5] * 5))
		mo2 = list[mo2] * 2 === list[i] ? mo2 + 1 : mo2
		mo3 = list[mo3] * 3 === list[i] ? mo3 + 1 : mo3
		mo5 = list[mo5] * 5 === list[i] ? mo5 + 1 : mo5
	}
	return list.pop()
}

console.log(nthUglyNumber(10))
console.log(nthUglyNumber(1))
