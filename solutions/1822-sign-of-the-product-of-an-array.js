/**
 * 1822. Sign of the Product of an Array
 * URL: https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * Leetcode Level: Easy
 * My Level: Why is this even on Leetcode?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negatives = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negatives++;
        } else if (nums[i] === 0) {
            return 0;
        }
    }
    
    if (negatives & 1) {
        return -1;
    }
    return 1;
};
