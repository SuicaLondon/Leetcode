function alternateDigitSum(n: number): number {
    let str = n.toString(), sum = 0
    for (let i = 0; i < str.length; i++) {
        sum = i % 2 != 0 ? sum - Number(str[i]) : sum + Number(str[i])
    }
    return sum
};

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));
