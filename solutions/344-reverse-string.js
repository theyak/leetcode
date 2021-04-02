/**
 * 344. Reverse String
 * URL: https://leetcode.com/problems/reverse-string/
 * Leetcode Level: Easy
 * My Level: Easy
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

// Why you would do this, who knows, but it was part
// of the recursive training and is also in the solution.
var reverseStringRecursive = function(s) {
    var helper = function(left, right) {
        if (left < right) {
            let t = s[left];
            s[left] = s[right];
            s[right] = t;
            helper(left + 1, right - 1);
        }
        return s;
    }
    return helper(0, s.length - 1);
};
