function reverseWords(s: string): string {
    let newStr = ''
    let endIndex = s.length
    for (let i = endIndex - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (i == endIndex - 1) {
                continue
            }
            let subStr = s.substring(i + 1, endIndex).trim()
            if (subStr === '') {
                endIndex = i
                continue
            }
            newStr += subStr + ' '
            endIndex = i
        } else if (i === 0) {
            newStr += s.substring(i, endIndex)
            endIndex = i
        }
    }
    return newStr.trim()
};
