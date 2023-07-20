function chunk(arr: any[], size: number): any[][] {
    let chunkedList: any[][] = []
    for (let i = 0; i < arr.length; i++) {
        if (i % size === 0) {
            chunkedList.push([arr[i]])
        } else {
            chunkedList[chunkedList.length - 1].push(arr[i])
        }
    }
    return chunkedList
}

console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 9, 6, 3, 2], 3))
console.log(chunk([8, 5, 3, 2, 6], 6))
