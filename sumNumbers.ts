/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function sumNumbers(root: TreeNode | null): number {
	let sum = 0
	const sumBranch = (root: TreeNode | null, numStr: string) => {
		console.log(root, numStr)
		if (root.left === null && root.right === null) {
			sum += parseInt(numStr, 10)
		}

		if (root.left !== null) {
			sumBranch(root.left, numStr + root.left.val)
		}

		if (root.right !== null) {
			sumBranch(root.right, numStr + root.right.val)
		}
	}
	sumBranch(root, root.val.toString())
	return sum
}
