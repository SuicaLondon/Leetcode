type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    function* generator(list: MultidimensionalArray) : Generator<number, void, unknown>{
        for (let i = 0; i< list.length; i++) {
            if (Array.isArray(list[i])) {
                yield* generator(list[i] as MultidimensionalArray)
            } else if (Number.isFinite(list[i])) {
                yield list[i] as number
            }
        }
    }
    yield* generator(arr)
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
