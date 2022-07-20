/**
 * @param {number[]} bills
 * @return {boolean}
 */
let lemonadeChange = function (bills) {
    let count5 = 0, count10 = 0, count20 = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            count5++
        } else if (bills[i] === 10) {
            count5--
            count10++
        } else if (bills[i] === 20) {
            count5--
            if (count10 > 0) {
                count10--
            } else {
                count5--
                count5--
            }
            count20++
        }
        if (count5 < 0 || count10 < 0 || count20 < 0) return false
    }
    return true
}

// console.log(lemonadeChange([5, 5, 5, 10, 20]))
// console.log(lemonadeChange([5, 5, 10, 10, 20]))
console.log(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]))