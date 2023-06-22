function isPrefixOfWord(sentence: string, searchWord: string): number {
    let wordIndex = 0
    let i = 0
    while (i < sentence.length) {
        if (sentence[i] == ' ' || wordIndex == 0) {
            wordIndex++
            if (wordIndex != 1) i++
            for (let searchWordIndex = 0; searchWordIndex < searchWord.length; searchWordIndex++) {
                if (sentence[i] == searchWord[searchWordIndex]) {
                    if (searchWordIndex == searchWord.length - 1) {
                        return wordIndex
                    }
                    i++
                } else {
                    break
                }
            }
            continue
        } else {
            i++
        }
    }
    return -1
}

console.log(isPrefixOfWord('i love eating burger', 'burg'))
console.log(isPrefixOfWord('this problem is an easy problem', 'pro'))
console.log(isPrefixOfWord('i am tired', 'you'))
console.log(isPrefixOfWord('hellohello hellohellohello', 'ell'))