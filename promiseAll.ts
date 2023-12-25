async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        try {
            let results: T[] = []
            let count = 0
            for (let i = 0; i < functions.length; i++) {
                functions[i]().then(result => {
                    results[i] = result
                    count++
                    if (count === functions.length) {
                        resolve(results)
                    }
                }).catch(error => {
                    reject(error)
                })
            }
        } catch (error) {
            reject(error)
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
