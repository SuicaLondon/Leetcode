type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let number = init
    return {
        increment: () => ++number,
        decrement: () => --number,
        reset: () => {
            number = init
            return number
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())

const counter1 = createCounter(0)
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.decrement())
console.log(counter1.reset())
console.log(counter1.reset())