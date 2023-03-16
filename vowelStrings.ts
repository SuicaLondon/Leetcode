function vowelStrings(words: string[], left: number, right: number): number {
    const vowel = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u',
    }
    let count: number = 0
    for (let i = left; i <= right; i++) {
        let word = words[i]
        if (vowel[word[0]] && vowel[word[word.length - 1]]) {
            count++
        }
    }
    return count
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2))
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4))