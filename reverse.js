/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    // const MAX_INT32 = Math.pow(2, 31)
    // let arr = []
    // let polarity = x >= 0 ? 1 : -1
    // if(polarity === -1) {
    //     x = Math.abs(x)
    // }
	// while (x >= 10) {
	// 	arr.push(x % 10)
	// 	x = Math.floor(x / 10)
	// }
    // arr.push(x)
    // let y = parseInt(arr.join(''), 10)
    // if (y > 2147483648) {
    //     return 0
    // }
    // return y * polarity
    let polarity = x >= 0 ? 1 : -1
    if(polarity === -1) {
        x = Math.abs(x)
    }
    let reversedNum = parseInt(x.toString().split('').reverse().join(''), 10)
    if (reversedNum > 2147483648) {
        return 0
    }
    return reversedNum * polarity
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
console.log(reverse(10))
console.log(reverse(1534236469))