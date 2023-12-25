class Store {
    value: number;
    duration: number;
    expiredTime: number
    constructor(value: number, duration: number) {
        this.value = value
        this.duration = duration
        this.expiredTime = Date.now() + duration
    }
}

class TimeLimitedCache {
    store = {}
    constructor() {}

    set(key: number, value: number, duration: number): boolean {
        if (this.store[key] != undefined) {
            const now = Date.now()
            if (now < this.store[key].expiredTime) {
                this.store[key] = new Store(value, duration)
                return true
            }
        }
        this.store[key] = new Store(value, duration)
        return false
    }

    get(key: number): number {
        if (this.store[key] != undefined) {
            const now = Date.now()
            if (now < this.store[key].expiredTime) {
                return this.store[key].value
            }
        }
        return -1

    }

    count(): number {
        let counter = 0
        let values: Store[] = Object.values(this.store)
        for (let i = 0; i < values.length; i++) {
            const now = Date.now()
            if (now < values[i].expiredTime) {
                counter++
            }
        }
        return counter
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
