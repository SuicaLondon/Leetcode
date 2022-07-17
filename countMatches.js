/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
let keyPairs = {
    type: 0,
    color: 1,
    name: 2
}
let countMatches = function (items, ruleKey, ruleValue) {
    let count = 0
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item[keyPairs[ruleKey]] === ruleValue) count++
    }
    return count
}

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"))
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"))