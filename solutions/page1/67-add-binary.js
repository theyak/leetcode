/**
 * 67. Add Binary
 * URL: https://leetcode.com/problems/add-binary/
 * Leetcode Level: Easy
 * My Level: Easy, especially if you've done add strings since it's the same thing.
 *
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length < b.length) {
        [a, b] = [b, a];
    }
    
    let pa = a.length - 1;
    let pb = b.length - 1;
    let carry = 0;
    let answer = "";
    
    function append(d) {
        carry = 0;
        if (d > 1) {
            d -= 2;
            carry = 1;
        }
        answer = d + answer;
    }
    
    while (pa >= 0) {
        let na = a.charCodeAt(pa) - 48;
        if (pb >= 0) {
            let nb = b.charCodeAt(pb) - 48;
            append(na + nb + carry);
        } else {
            append(na + carry);
        }
        pb--;
        pa--;
    }
    
    if (carry) {
        answer = "1" + answer;
    }
    
    return answer;
};
