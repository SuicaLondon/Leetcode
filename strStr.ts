function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] == needle[j]) {
                    if (j == needle.length - 1) {
                        return i
                    }
                } else {
                    if (i + j == haystack.length - 1) {
                        return -1
                    }
                    break
                }
            }
        }
    }
    return -1
};
