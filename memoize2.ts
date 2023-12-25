type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const VALUE = Symbol('VALUE')
    const map = new Map()
    return  (...args) => {
        let mapNode = map
        for (const arg of args) {
            if (!mapNode.has(arg)) {
                 mapNode.set(arg, new Map())
            }
            mapNode = mapNode.get(arg)
        }
        if (mapNode.has(VALUE)) return mapNode.get(VALUE)
        const result = fn(...args)
        mapNode.set(VALUE, result)
        return result
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
