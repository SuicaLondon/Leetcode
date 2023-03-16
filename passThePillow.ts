function passThePillow(n: number, time: number): number {
    let index = 1
    let isAdding = true
    while (time > 0) {
        if (isAdding) {
            if (index == n) {
                isAdding = false
                index--
            } else {
                index++
            }
        } else {
            if (index == 1) {
                isAdding = true
                index++
            } else {
                index--
            }
        }
        time--
    }
    return index
};

console.log(passThePillow(4, 5))
console.log(passThePillow(3, 2))
console.log(passThePillow(18, 38))