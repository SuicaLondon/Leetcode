/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function (n) {
    let set = new Set()
    function checkHappy(number) {
        let list = number.toString().split('')
        let sum = 0
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            sum += item * item
        }
        return sum
    }
    let rest = n
    while(rest !== 1) {
        rest = checkHappy(rest)

        if (set.has(rest)) return false
        set.add(rest)
    } 
    return true
}

console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(3))
