function isEmpty(obj: Record<string, any> | any[]): boolean {
    for (let key in obj) {
        return false
    }
    return true
}


console.log(isEmpty({ "x": 5, "y": 42 }))
console.log(isEmpty({}))
console.log(isEmpty([null, false, 0]))