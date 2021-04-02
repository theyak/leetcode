/**
 * 111. Minimum Depth of Binary Tree
 * URL: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * Leetcode level: Easy
 * My level: Easy-ish. I had to look up my BFS algorithm from #102
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
 * @return {number}
 */

var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let queue = [root];   
    let level = 1;
    
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; ++i) {
            const node = queue.shift();

            if (!node.left && !node.right) {
                return level;
            }
            
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        level++;
    }
    return level;
}
    
// Leetcode's solution was slightly different, passing the level with the node
// into the queue. It is slightly slower.
var minDepth1 = function(root) {
    if (!root) {
        return 0;
    }
    
    if (!root.left && !root.right) {
        return 1;
    }
    
    let level = 1;
    let queue = [[root, level]];
    
    
    while (queue.length) {
        const [node, level] = queue.shift();

        if (!node.left && !node.right) {
            return level;
        }
        
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level + 1]);
        }
    }
    return level;
}

