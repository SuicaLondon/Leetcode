function passThePillow(n: number, time: number): number {
    let timePerRound = n - 1
    let round = Math.floor(time / timePerRound)
    time = time % timePerRound
    if (round % 2 != 0) {
        return n - time
    } else {
        return 1 + time
    }
};

console.log(passThePillow(4, 5))
console.log(passThePillow(3, 2))
console.log(passThePillow(18, 38))
console.log(passThePillow(8, 9))