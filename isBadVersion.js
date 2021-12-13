/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
        let left = 1
		let right = n
		while (left < right) {
            let mid = Math.floor((right + left) / 2)
            console.log(left, mid ,right)
			if (isBadVersion(mid)) {
				right = mid
			} else {
				left = mid + 1
			}
		}
		return left
	}
}
let bad
function isBadVersion(num) {
    return num >= bad
}
const sol = solution(isBadVersion)
bad = 4
console.log(sol(5))
bad = 1
console.log(sol())