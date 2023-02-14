/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverse = (head) => {
  let cur = head;
  let prev = null;
  let next;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let startPointer = head;
  let len = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    len++;
  }

  let mid = reverse(slow);

  while (len) {
    len--;
    if (mid.val !== startPointer.val) return false;
    mid = mid.next;
    startPointer = startPointer.next;
  }

  return true;
};

/*
234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 

Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 
Follow up: Could you do it in O(n) time and O(1) space?
*/
