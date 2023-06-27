async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    return Promise.all([promise1, promise2]).then((results) => results[0] + results[1])
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

let promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then(console.log)