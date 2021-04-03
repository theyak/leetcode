/**
 * 938. Range Sum of BST
 * URL: https://leetcode.com/problems/range-sum-of-bst/
 * Leetcode Level: Easy
 * My Level: Super easy without optimization, easy with.
 *
 * Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 */
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    helper(root);
    return sum;
    
    function helper(node) {
        if (!node) {
            return;
        }
        
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        
        // Ifs are an optimizer. Works fine without.
        // If not a BST, ifs wouldn't work.
        if (node.val > low) {
            helper(node.left);
        }
        
        if (node.val < high) {
            helper(node.right);        
        }
    }
};
