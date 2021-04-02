/**
 * 102. Binary Tree Level Order Traversal
 * URL: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Level: Medium
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Same code was run multiple times. Once ran at 72 ms, or faster than 98.97% of other submissions. 
 * Also once ran at 92 ms. Makes me wonder why leetcode even measures this.
 *
 * Despite the name, this is just breadth first search (https://en.wikipedia.org/wiki/Breadth-first_search) traversal
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
 * Iterative version of BFS of a tree
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderIterative = function(root) {
    const levels = [];
    const queue = [];
  
    if (!root) {
        return levels;
    }
    
    let level = 0;
    queue.push(root);
    
    while (queue.length > 0) {
        // Add the level
        levels.push([]);
        
        // Important!! Nodes at current level. We must assign this here
        // instead of in loop as queue.length because queue size keeps changing. 
        let length = queue.length;
        
        for (let i = 0; i < length; ++i) {
            const node = queue.shift();
            
            // Each queued item gets pushed to the current level
            // Level will increase once we have removed all
            // the nodes at current level.
            levels[level].push(node.val);
            
            // Add child nodes to the queue for processing in next level
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        // Can you guess what we are doing here? Level up!
        level++;
    }
    
    return levels;
}
 
/**
 * Recursive version of BFS of a tree
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const levels = [];
    let level = 0;

    if (!root) {
        return levels;
    }
    
    function helper(node, level) {
        // Go ahead and add this level
        if (levels.length === level) {
            levels.push([]);
        }
        
        // Push! Push! Push!
        levels[level].push(node.val);

        // Add child nodes for next level
        if (node.left) {
            helper(node.left, level + 1);
        }

        if (node.right) {
            helper(node.right, level + 1);
        }
    }
    
    helper(root, 0);
    return levels;
    
};
