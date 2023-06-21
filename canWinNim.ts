function canWinNim(n: number): boolean {
    return n % 4 != 0
}

console.log(canWinNim(4))
console.log(canWinNim(1))
console.log(canWinNim(2))