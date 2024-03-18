class MyHashSet {
	private set = {}
	constructor() {}

	add(key: number): void {
		this.set[key] = key
	}

	remove(key: number): void {
		delete this.set[key]
	}

	contains(key: number): boolean {
		return this.set[key] !== undefined
	}
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
