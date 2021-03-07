/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
    if (!needle) return 0
    let idx = 0
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] != needle[idx]) {
        i = i-idx
        idx = 0
      } else {
        if (idx === needle.length-1) return i-idx
        idx++
      }
    }
    return -1
  };

// console.log(strStr('hello', 'll'))
// console.log(strStr("aaaaa", "bba"))
// console.log(strStr("", ""))
// console.log(strStr("a", ""))
// console.log(strStr("", "a"))
// console.log(strStr("a", "a"))
// console.log(strStr('abc', 'c'))
// console.log(strStr('aaa', 'aaaa'))
// console.log(strStr('mississippi', 'mississippi'))
// console.log(strStr('mississippi', 'issi'))
// console.log(strStr('mississippi', 'issip'))
