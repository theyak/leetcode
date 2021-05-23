/**
 * 22. Generate Parentheses
 * URL: https://leetcode.com/problems/generate-parentheses/
 * Leetcode level: medium (though high percentage correct, so probably mis-leveled)
 * My level: easy
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answers = [];
    
    helper();
    
    function helper(s = "", open = 0, closed = 0) {
        if (s.length === n * 2) {
            answers.push(s);
            return;
        }
        
        if (open < n) {
            helper(s + "(", open + 1, closed);
        }
        if (closed < open) {
            helper(s + ")", open, closed + 1);
        }
    }
    
    return answers;
};
