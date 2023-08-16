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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let list: number[][] = []
    const sumAll = (root: TreeNode | null, currentSum: number, depth: number): number[][] => {
        if (root === null) return []
        const sum = root.val
        if (root.left === null && root.right === null) {
            if (sum === targetSum) {
                list.push([sum])
                return list
            }
        }
        if (root.left !== null) {
            sumBranch(root.left, sum, [sum])
        }
        if (root.right !== null) {
            sumBranch(root.right, sum, [sum])
        }
        return list
    }
    const sumBranch = (root: TreeNode | null, currentSum: number, path: number[]) => {
        if (root === null) return
        let newSum = currentSum += root.val
        if (root.left === null && root.right === null) {
            console.log(newSum)
            if (newSum === targetSum) {
                path .push(root.val)
                list.push(path)
                return true
            }
        }
        if (root.left !== null) {
             let newPath =  Array.from(path)
            newPath.push(root.val)
            sumBranch(root.left, newSum, newPath)
        }

        if (root.right !== null) {
            let newPath =  Array.from(path)
            newPath.push(root.val)
            sumBranch(root.right, newSum, newPath)
        }
    }
    return sumAll(root, 0, 0)
};
