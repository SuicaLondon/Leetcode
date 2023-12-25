class MapSum {
    map: Map<string, number>
    constructor() {
        this.map = new Map<string, number>()
    }

    insert(key: string, val: number): void {
        this.map.set(key, val)
    }

    sum(prefix: string): number {
        let count = 0
        for (let [key] of this.map){
            console.log(key)
            if (key.startsWith(prefix)) {
                count += this.map.get(key)
            }
        }
        return count
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
