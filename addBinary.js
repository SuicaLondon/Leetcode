/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
	let sum = ''
	let i = a.length - 1
	let j = b.length - 1
    let reminder = 0
	while (i >= 0 || j >= 0) {
        let aUnit = parseInt(a[i] ? a[i] : '0')
        let bUnit = parseInt(b[j] ? b[j] : '0')
        let sumUnit = aUnit + bUnit + reminder
        reminder = Math.floor(sumUnit / 2)
        sumUnit = sumUnit % 2
        sum = sumUnit + sum
        i--
        j--
    }
    return reminder === 0 ? sum : reminder + sum
}

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
