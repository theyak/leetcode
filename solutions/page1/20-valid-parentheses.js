/**
 * 20. Valid Parentheses
 * URL: https://leetcode.com/problems/valid-parentheses/
 * Leetcode Level: Easy
 * My Level: Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *   Open brackets must be closed by the same type of brackets.
 *   Open brackets must be closed in the correct order.
 */
 
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        }
        if (c === ')') {
            if (!stack.length || stack.pop() !== '(') {
                return false;
            }
        }
        if (c === ']') {
            if (!stack.length || stack.pop() !== '[') {
                return false;
            }
        }
        if (c === '}') {
            if (!stack.length || stack.pop() !== '{') {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};
