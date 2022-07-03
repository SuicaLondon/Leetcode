/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
let isLongPressedName = function (name, typed) {
    let i = 0
    previous = ''
    while(i <= name.length) {
        if (name[i] === typed[i]) {
            previous = name[i]
            i++
        } else {
            if (previous === typed[i]) {
                // typed.substring(i, i + 1)
                typed = typed.slice(0, i) + typed.slice(i + 1)
            } else {
                return false
            }
        }
    }
    return typed === name
}

console.log(isLongPressedName('alex', 'aaleex'))
console.log(isLongPressedName('saeed', 'ssaaedd'))
console.log(isLongPressedName('vtkgn', 'vttkgnn'))