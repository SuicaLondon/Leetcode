/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 let isValidBST = function (root) {
	const checkVaild = (node, min = null, max = null) => {
		if (!node) return true
		if (max !== null && max <= node.val) {
			return false
		}
		if (min !== null && min >= node.val) {
			return false
		}
		return checkVaild(node.left, min, node.val) && checkVaild(node.right, node.val, max)
	}
	return checkVaild(root)
}
