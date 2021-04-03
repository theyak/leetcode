/**
 * 257. Binary Tree Paths
 * URL: https://leetcode.com/problems/binary-tree-paths/
 * Leetcode Level: Easy
 * My Level: Medium :(
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var s = [];
    var helper = function(node, path) {
        if (!node) {
            return;
        }

        path.push(node.val);

        helper(node.left, path);
        helper(node.right, path);

        if (!node.left && !node.right) {
            s.push(path.join("->"));
        }

        // Pops intermediary nodes. 
        // Could use [...path] or path.slice() in helper() call
        // to achieve same effect.
        path.pop();
    }
    
    helper(root, []);
    return s;
};
