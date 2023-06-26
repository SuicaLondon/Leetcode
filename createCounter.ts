function createCounter(n: number): () => number {
    return function () {
        return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const conter1 = createCounter(10)
console.log(conter1())
console.log(conter1())
console.log(conter1())

const conter2 = createCounter(-2)
console.log(conter2())
console.log(conter2())
console.log(conter2())
console.log(conter2())
console.log(conter2())