class ArrayWrapper extends Array {
    nums: number[]
    constructor(nums: number[]) {
        super()
        this.nums = nums
    }

    valueOf(): number {
        let sum = 0
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i]
        }
        return sum
    }

    toString(): string {
        let str = '['
        for (let i = 0; i < this.nums.length; i++) {
            str += (i == this.nums.length - 1 ? this.nums[i] : `${this.nums[i]},`)
        }
        str += ']'
        return str
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2)
console.log(String(obj1))
console.log(String(obj2))