/**
 * 977. Squares of a Sorted Array
 * URL: https://leetcode.com/problems/squares-of-a-sorted-array/
 * Leetcode Level: Easy (though O(n) solution is harder than O(n log n) solution)
 * My Level: Easy
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = Array(nums.length);
    
    let left = 0;
    let right = nums.length - 1;
    let number;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            number = nums[left++];
        } else {
            number = nums[right--];
        }
        
        result[i] = number * number;
    }
    
    return result;
};

