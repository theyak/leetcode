/**
 * 14. Longest Common Prefix
 * URL: https://leetcode.com/problems/longest-common-prefix/
 * Leetcode Level: Easy
 * My Level: Easy
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    let pos = 0;
    for (let pos = 0; pos < strs[0].length; pos++) {
        let c = strs[0][pos];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i].length <= pos || strs[i][pos] !== c) {
                return prefix;
            }
        }
        prefix += c;
    }
    return prefix;
};
