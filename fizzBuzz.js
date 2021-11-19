/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
	let list = []
	for (let i = 1; i <= n; i++) {
        if (i% 15=== 0) {
            list.push('FizzBuzz')
        } else if(i%5===0) {
            list.push('Buzz')
        } else if( i% 3 === 0) {
            list.push('Fizz')
        }else {
            list.push(i.toString())
        }
    }
    return list
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
