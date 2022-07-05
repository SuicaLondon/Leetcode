/**
 * @param {number} n
 * @return {number}
 */
let fib = function (n) {
    let list = [0 , 1]
    for (let i = 2; i <= n; i ++) {
        list[i] = list[i - 1] + list[i - 2]
    }
    return list[n]
}


console.log(fib(2))
console.log(fib(3))
console.log(fib(4))