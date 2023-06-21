function isPerfectSquare(num: number): boolean {
    if (num == 1) return true
    let i = Math.floor(num / 2)
    while (i > 0 && i * i >= num) {
        console.log(i, i * i)
        if (i * i == num) return true
        i--
    }
    return false
}


console.log(isPerfectSquare(1))
console.log(isPerfectSquare(2))
console.log(isPerfectSquare(3))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))