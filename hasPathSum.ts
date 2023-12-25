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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const sumBranch = (root: TreeNode | null, currentSum: number): boolean => {
        if (root === null) return false
        let newSum = currentSum += root.val
        if (root.left === null && root.right === null) {
            if (newSum === targetSum) return true
        } 
        if (root.left !== null) {
            let result = sumBranch(root.left, newSum)
            if (result) return true
        }

        if (root.right !== null) {
            let result = sumBranch(root.right, newSum)
            if (result) return true
        }

        return false
    }
    return sumBranch(root, 0)
};
