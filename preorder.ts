/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    let result = []
    const inorder = (node: Node | null) => {
        if (node == null) return result
        result.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            inorder(node.children[i])
        }
        return result
    }
    return inorder(root)
};
