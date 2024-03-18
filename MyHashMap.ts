class MyHashMap {
	private map: Record<number, number>
	constructor() {
		this.map = {}
	}

	put(key: number, value: number): void {
		this.map[key] = value
	}

	get(key: number): number {
		return this.map[key] !== undefined ? this.map[key] : -1
	}

	remove(key: number): void {
		delete this.map[key]
	}
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
