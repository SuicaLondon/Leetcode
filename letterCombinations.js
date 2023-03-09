function letterCombinations(digits) {
    if (digits === '') return []
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    let result = []

    function addLetter(str, index) {
        if (digits.length === index) {
            result.push(str)
            return
        }

        for (let i = 0; i < map[digits[index]].length; i++) {
            addLetter(str + map[digits[index]][i], index + 1)
        }
    }


    addLetter('', 0)
    return result
};

console.log(letterCombinations("23"))
console.log(letterCombinations("234"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))