function numIdenticalPairs(nums: number[]): number {
    if (nums.length == 1) return 0
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
    }
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.log(numIdenticalPairs([1, 1, 1, 1]))
console.log(numIdenticalPairs([1, 2, 3]))