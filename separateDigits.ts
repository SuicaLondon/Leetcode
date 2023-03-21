function separateDigits(nums: number[]): number[] {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i].toString()
        for (let j = 0; j < num.length; j++) {
            result.push(num[j])
        }
    }
    return result
};

console.log(separateDigits([13, 25, 83, 77]))
console.log(separateDigits([7, 1, 3, 9]))