/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
    if (n <= 2) return 0
    function isPrime(num) {
        for (let i = 3; i <= Math.sqrt(num); i+=2) {
            if (num % i === 0) return false
        }
        return true
    }
    let list = [2]
    for (let i = 3; i < n; i+=2) {
        if (isPrime(i)) {
            list.push(i)
        }
    }
    console.log(list)
    return list.length
}


console.log(countPrimes(10))
console.log(countPrimes(0))
console.log(countPrimes(1))
console.log(countPrimes(2))