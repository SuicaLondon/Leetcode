let isPalindrome = function(x) {
    if (x<0) return false
    let string = x + ''

    for (let i = 0; i < string.length/2; i++) {
        let frontIndex = i
        let backIndex = string.length - i - 1
        let front = string[frontIndex]
        let back = string[backIndex]
        console.log(front, back, frontIndex, backIndex)
        if (front == back) {
            if (frontIndex === backIndex) return true
            if (frontIndex === backIndex - 1) return true
        } else {
            return false
        }
    }
}

console.log(isPalindrome(11))
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(-101))