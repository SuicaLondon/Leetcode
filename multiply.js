let multiply = function(num1, num2) {
    let timedNumber = 0
    let sumNumber = 0
    let advancedNumber = 0
    console.log(num1, num2)
    console.log(num1.length, num2.length)
    for(let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            if (num1[j] === "0" || num2[i] === "0") continue
            let iIndex = num1.length - j
            let jIndex = num2.length - i
            let preparedNum1 = num1[j]
            let preparedNum2 = num2[i]
            if(num1[j] == undefined) preparedNum1 = 0
            if(num2[i] == undefined) preparedNum2 = 0
            timedNumber = parseInt(preparedNum1) * parseInt(preparedNum2)
            if (advancedNumber > 0) {
                timedNumber = timedNumber + advancedNumber
                advancedNumber = 0
            }
            if(j!=0 && i !=0 && timedNumber>10) {
                advancedNumber = Math.floor(timedNumber / 10)
                timedNumber = timedNumber % 10
            }
            sumNumber += Math.pow(10, jIndex - 1) * Math.pow(10, iIndex - 1) * timedNumber
            timedNumber = 0
        }
    }
    return sumNumber + ""
}

// console.log(multiply("2", "3"))
// console.log(multiply("123", "456"))
// console.log(multiply("92", "83"))
// console.log(multiply("9", "99"))
console.log(multiply("123456789", "987654321") , 123456789*987654321)