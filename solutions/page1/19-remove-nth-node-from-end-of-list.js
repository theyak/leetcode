/**
 * 19. Remove Nth Node From End of List
 * URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Leetcode level: Medium
 * My Level: Easy
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    
    while (n--) {
        // Removing first element of list
        if (!fast.next) {
            return head.next;
        }        
        fast = fast.next;
    }
    
    // At this point slow is n positions behind fast.
    // But while it was slow to start, it'll now travel
    // at the same speed.
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the element
    slow.next = slow.next.next;
    return head;    
};
