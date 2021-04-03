/**
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
 * URL: https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 * Leetcode Level: Medium
 * My Level: Medium
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function(root) {
    let head = null;
    let tail = null;
    
    function helper(node) {
        if (!node) {
            return;
        }
            
        helper(node.left);

        if (tail) {
            tail.right = node;
            node.left = tail;
        } else {
            head = node;
        }
        tail = node;

        helper(node.right);
    }
    
    helper(root);
    
    if (head) {
        head.left = tail;
        tail.right = head;
    }
    return head;
}


// Easy solution, not in place
var treeToDoublyListEasy = function(root) {
    
    let head = null;
    let tail = null;
    let curr = null;
    
    function helper(node, parent) {
        if (!node) {
            return;
        }
        
        helper(node.left, node);
        
        // In Order - Do stuff here!
        const newNode = new Node(node.val);
        if (!head) {
            head = newNode;
            newNode.left = null;
        } else {
            curr.right = newNode;
            newNode.left = curr;
        }
        
        curr = newNode;
        
        helper(node.right, node);
    }
    helper(root, null);
    
    if (head) {
        curr.right = head;
        head.left = curr;
    }
    
    return head;
};
