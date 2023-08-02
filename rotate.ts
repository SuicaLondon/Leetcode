/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let copyNums = Array.from(nums)
    const ak = k % nums.length
    for (let i = 0; i < nums.length; i++) {
        let copyIndex = i > ak - 1 ? (i - ak) :(nums.length - ak + i)
        nums[i] = copyNums [copyIndex]
    }
};
