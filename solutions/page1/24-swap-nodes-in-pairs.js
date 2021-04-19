/**
 * 24. Swap Nodes in Pairs
 * URL: https://leetcode.com/problems/swap-nodes-in-pairs/
 * Leetcode Level: Medium
 * My Level: Easy - though I didn't come up with recursive solution
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
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
 * @return {ListNode}
 */


var swapPairs = function(node) {
    // The 2nd element becomes first, so that will be our return value;
    let ret = node && node.next ? node.next : node;
    
    let prev = null;
    while (node && node.next) {
        let first = node;
        let second = node.next;
        
        first.next = second.next;
        second.next = first;
        
        if (prev) {
            prev.next = second;
        }
        
        prev = first;
        node = first.next;
    }
    return ret;
};


var swapPairs1 = function(node) {
    if (!node || !node.next) {
        return node;
    }
    
    let head = node.next;
    
    let ptr = node;
    let prev = null;
    while (ptr) {
        let first = ptr;
        let second = ptr.next;
        
        if (second && second.next && second.next.next) {
            ptr = ptr.next.next;
        } else {
            ptr = null;
        }
        
        let tmp = second.next;
        second.next = first;
        first.next = tmp;
        if (prev) {
            prev.next = second;
        }
        
        prev = first;
    }
    
    return head;
};

var swapPairsRecursive = function(node) {
    if (!node || !node.next) {
        return node;
    }

    const first = node;
    const second = node.next;

    first.next = swapPairsRecursive(second.next);
    second.next = first;

    return second;
};
