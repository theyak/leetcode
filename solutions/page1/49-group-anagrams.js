/**
 * 49. Group Anagrams
 * URL: https://leetcode.com/problems/group-anagrams/
 * Level: Medium (Using JavaScript built-ins it's pretty easy)
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 *
 * Constraints:
 * - strs[i] consists of lower-case english letters
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const sorted = word.split("").sort().join("");
        
        const entry = map.get(sorted) || [];
        entry.push(word);
        map.set(sorted, entry);
    }
  
    return Array.from(map.values());
};
