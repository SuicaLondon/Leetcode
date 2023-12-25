class MyQueue {
    queue = []
    constructor() {

    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        return this.queue.shift()
    }

    peek(): number {
        return this.queue[0]
    }

    empty(): boolean {
        return this.queue.length == 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
