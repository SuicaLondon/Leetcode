function numberToLetter(value: number) {
	return String.fromCharCode(value + 97)
}
function smallestFromLeaf(root: TreeNode | null): string {
	if (!root) return
	let min = ''
	let currentVal = ''
	function accessBranch(childNode: TreeNode | null): string {
		if (!childNode) return
		currentVal = numberToLetter(childNode.val) + currentVal
		if (!childNode.left && !childNode.right) {
			if (min === '' || currentVal < min) {
				min = currentVal
			}
		}
		childNode.left && accessBranch(childNode.left)
		childNode.right && accessBranch(childNode.right)
		currentVal = currentVal.slice(1)
	}

	accessBranch(root)
	return min
}
