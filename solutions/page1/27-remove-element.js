/**
 * 27. Remove Element
 * URL: https://leetcode.com/problems/remove-element/
 * Leetcode Level: Easy
 * My Level: Easy
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ptr = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[ptr++] = nums[i];
        }
    }

    return ptr;
};
