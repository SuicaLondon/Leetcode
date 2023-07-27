function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    let b = 1;
    yield a
    yield b
    while (true) {
        let newNumber = a + b
        yield newNumber
        a = b
        b = newNumber
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
