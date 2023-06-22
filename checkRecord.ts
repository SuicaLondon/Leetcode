function checkRecord(s: string): boolean {
    let absent = 0
    let consecutiveLate = 0
    for (let i = 0; i < s.length; i++) {
        let record = s[i]
        if (record == 'L') {
            consecutiveLate++
            if (consecutiveLate >= 3) {
                return false
            }
        } else {
            consecutiveLate = 0
            if (record == 'A') {
                absent++
            }
            if (absent >= 2) {
                return false
            }
        }
    }
    return true
}

console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))