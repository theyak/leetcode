/**
 * 347. Top K Frequent Elements
 * URL: https://leetcode.com/problems/top-k-frequent-elements/
 * Leetcode Level: Medium
 * My Level: Easy
 *
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * The solutions provided by leetcode are much more complex, which is probably why it was rated mediu,
 */
 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
 
    // Map of frequencies O(n)
    for (let n of nums) {
        let count = (map.get(n) || 0) + 1;
        map.set(n, count);
    }
    
    let sorted = [];
    if (map.size === k) {
        // k = nums.length, nums all unique, O(n) or O(k)
        sorted = Array.from(map);
    } else {    
        // Sort the map O(k log k)
        sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    }

    // Build output O(k)
    let final = [];
    for (let i = 0; i < k; i++) {
        final.push(sorted[i][0]);
    }
    
    return final;
};
