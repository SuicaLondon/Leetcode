function differenceOfSum(nums: number[]): number {
    let elSum = 0, digSum = 0
    for (let i = 0; i < nums.length; i++) {
        elSum += nums[i]
        let numStr = nums[i].toString()
        for (let j = 0; j < numStr.length; j++) {
            digSum += Number(numStr[j])
        }
    }
    return Math.abs(elSum - digSum)
};

console.log(differenceOfSum([1, 15, 6, 3]))
console.log(differenceOfSum([1, 2, 3, 4]))