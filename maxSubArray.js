/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let csum = nums[0]
    let msum = csum
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        if (csum < 0) {
            csum = num;
        } else {
            csum += num;
        }
        if (csum > msum) {
            msum = csum
        }
    }
    return msum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))
// console.log(maxSubArray())