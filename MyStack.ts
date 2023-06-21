class MyStack {
    queue: number[]
    constructor() {
        this.queue = []
    }

    push(x: number): void {
        const index = this.queue.length > 0 ? this.queue.length : 0
        this.queue[index] = x
    }

    pop(): number {
        var poped: number = this.queue[this.queue.length - 1]
        this.queue.length = this.queue.length - 1
        return poped
    }

    top(): number {
        return this.queue[this.queue.length - 1]
    }

    empty(): boolean {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i] != null) return false
        }
        return true
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const myStack = new MyStack()
myStack.push(1)
myStack.push(2)
console.log(myStack.top())
console.log(myStack.pop())
console.log(myStack.empty())

const myStack2 = new MyStack()
myStack2.push(1)
myStack2.push(2)
console.log(myStack2.pop())
console.log(myStack2.top())

const myStack3 = new MyStack()
myStack3.push(1)
console.log(myStack2.pop())
console.log(myStack2.empty())