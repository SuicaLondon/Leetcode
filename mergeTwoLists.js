/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function (l1, l2) {
	if (!l1 || !l2) return l1 || l2
	let node1 = l1
	let node2 = l2
	let current
	if (node1.val > node2.val) {
		current = new ListNode(node2.val)
		node2 = node2.next
	} else {
		current = new ListNode(node1.val)
		node1 = node1.next
	}

	let head = current

	while (node1 && node2) {
		if (node1.val > node2.val) {
			current.next = node2
			node2 = node2.next
		} else {
			current.next = node1
			node1 = node1.next
		}
		current.next && (current = current.next)
	}
	current.next = node1 ? node1 : node2
	return head
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function ArrayToListNode(array) {
	let lastNode
	for (let i = array.length - 1; i >= 0; i--) {
		if (lastNode) {
			lastNode = new ListNode(array[i], lastNode)
		} else {
			lastNode = new ListNode(array[i])
		}
	}
	return lastNode
}

function ListNodeToArray(list) {
	let array = []
	while (list) {
		let node = list.val
		array.push(node)
		list = list.next
	}
	return array
}

console.log(
	ListNodeToArray(
		mergeTwoLists(ArrayToListNode([1, 2, 4]), ArrayToListNode([1, 3, 4]))
	)
)
console.log(
	ListNodeToArray(mergeTwoLists(ArrayToListNode([]), ArrayToListNode([])))
)
console.log(
	ListNodeToArray(mergeTwoLists(ArrayToListNode([]), ArrayToListNode([0])))
)
