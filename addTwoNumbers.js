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
var addTwoNumbers = function (l1, l2) {
	var List = new ListNode(0)
	var head = List
	var sum = 0
	var nextUp = 0
	while (l1 !== null || l2 !== null || sum > 0) {
		if (l1 !== null) {
			sum = sum + l1.val
			l1 = l1.next
		}
		if (l2 !== null) {
			sum = sum + l2.val
			l2 = l2.next
		}
		if (sum >= 10) {
			nextUp = 1
			sum = sum - 10
		}

		head.next = new ListNode(sum)
		head = head.next

		sum = nextUp
		nextUp = 0
	}

	return List.next
}
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([0], [0]))
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
