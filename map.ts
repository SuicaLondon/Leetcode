function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr
}
