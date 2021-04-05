/**
 * 125. Valid Palindrome
 * URL: https://leetcode.com/problems/valid-palindrome/
 * Leetcode Level: Easy
 * My Level: Easy
 *
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Split/Reverse with replace version
    s = s.replace(/[^a-zA-Z0-9]*/gi, "").toLowerCase();
    return s === s.split("").reverse().join("");
    
    
    // Pointer with replace version
    s = s.toLowerCase().replace(/[^a-z0-9]*/g, "");
    
    let p1 = 0;
    let p2 = s.length - 1;
    
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false;
        } else {
            p1++;
            p2--;
        }
    }
    
    return true;
};
