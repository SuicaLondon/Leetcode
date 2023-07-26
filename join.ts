function join(arr1: any[], arr2: any[]): any[] {
    let map: { number?: any } = {}
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i].id] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i].id] == undefined) {
            map[arr2[i].id] = arr2[i]
        } else {
            Object.assign(map[arr2[i].id], arr2[i])
        }
    }
    return Object.values(map)
}
