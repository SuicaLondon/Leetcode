class BrowserHistory {
    current: number = 0
    history: string[] = []
    constructor(homepage: string) {
        this.history.push(homepage)
        this.current = this.history.length - 1
    }

    visit(url: string): void {
        if (this.current != this.history.length - 1) {
            this.history.splice(this.current + 1, this.history.length - this.current)
        }
        this.history.push(url)
        this.current = this.history.length - 1
    }

    back(steps: number): string {
        let to = steps > this.current ? 0 : this.current - steps
        this.current = to
        return this.history[to]
    }

    forward(steps: number): string {
        let to = steps + this.current > this.history.length - 1 ? this.history.length - 1 : this.current + steps
        this.current = to
        return this.history[to]
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
