/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function (pattern, s) {
    let list1 = pattern.split('')
    let list2 = s.split(' ')
    if(list1.length !== list2.length) return false 
    let p = new Set()
    let m = new Map()
    for(let i = 0; i < pattern.length; i++) {
        let pat = list1[i]
        let word = list2[i]
        if(p.has(pat)) {
            if (m.get(word) !== pat) return false
        } else {
            if(m.has(word)) return false
            p.add(pat)
            m.set(word, pat) 
        }
    }
    return true
}

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))
