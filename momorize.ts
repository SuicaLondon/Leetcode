type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    let memo = {}
    return function(...args) {
        const argsKey = args.length ==1  ?  args[0] : args.join(',')
        if (memo[argsKey] != null) {
            return memo[argsKey]
        } else {
            const result = fn(...args)
            memo[argsKey] = result
            return result
        }
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
