/**
 * 415. Add Strings
 * URL: https://leetcode.com/problems/add-strings/
 * Leetcode Level: Easy
 * Me Level: Easy
 *
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // To make things easier in pointer checking, put the larger number on "top"
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }  
    
    // Append digit to string and set carry flag
    function append(t) {
        carry = 0;
        if (t >= 10) {
            carry = 1;
            t -= 10;
        }
        sum += t;        
    }
    
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    let sum = "";
    while (p1 >= 0) {
        if (p2 >= 0) {
            let c1 = num1.charCodeAt(p1) - 48;
            let c2 = num2.charCodeAt(p2) - 48;
            append(c1 + c2 + carry);
        } else {
            append(num1.charCodeAt(p1) - 48 + carry);
        }
        p1--;
        p2--;
    }
    if (carry) {
        sum += "1";
    }
  
    return sum.split("").reverse().join("");
}
