type Obj = Record<any, any>;
const compactObject = function (obj: any): Obj {
    console.log(obj)
    return compact(obj)
};

function compact(obj: any) {
    if (Array.isArray(obj)) {
        let resultArray = [];
        for (let i = 0; i < obj.length; i++) {
            let result = compact(obj[i])
            if (Boolean(result)) {
                resultArray.push(result)
            }
        }
        return resultArray
    } 
    if (typeof obj === 'object' && obj !== null) {
        let resultObject = {}
        let keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            let result = compact(obj[key])
            if (Boolean(result)) {
                resultObject[key] = result
            }
        }
        return resultObject
    }
    if (Boolean(obj) === true) return obj
    return undefined
}

console.log(compactObject([null, 0, false, 1]))
console.log(compactObject({ "a": null, "b": [false, 1] }))
console.log(compactObject([null, 0, 5, [0], [false, 16]]))
