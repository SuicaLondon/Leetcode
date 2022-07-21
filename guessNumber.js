/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

function generator(pick) {
    let guessNumber = function (n) {
        let left = 1, right = n
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (guess(mid) === -1) {
                right = mid - 1
            } else if (guess(mid) === 1) {
                left = mid + 1
            } else {
                return mid
            }
        }
        return left
    }
    function guess(num) {
        if (num > pick) {
            return -1
        } else if (num < pick) {
            return 1
        } else {
            return 0
        }
    }
    return guessNumber
}

console.log(generator(6)(10))
console.log(generator(1)(1))
console.log(generator(2)(1))