let multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    const n1Length = num1.length
    const n2Length = num2.length
    res = new Array(n1Length + n2Length).fill(0)
    for(let i = n1Length - 1; i >= 0; i--) {
        for (let j = n2Length - 1; j >= 0; j--) {
            const p1=i+j
            const p2=i+j+1
            let sum = res[p2] + parseInt(num1[i], 10) * parseInt(num2[j], 10)

            res[p2] = sum % 10
            res[p1] += Math.floor(sum/10)
        }
    }
    if (res[0] === 0) res.shift()
    return res.join('')
}

// console.log(multiply("2", "3"))
// console.log(multiply("123", "456"))
// console.log(multiply("92", "83"))
// console.log(multiply("9", "99"))
// console.log(multiply("17039", "7218"))
// console.log(multiply("123456789", "987654321") , 123456789*987654321)