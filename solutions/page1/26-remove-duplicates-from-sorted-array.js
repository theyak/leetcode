/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Leetcode level: Easy
 *
 * Note. I played around with this a lot to see if I could get anything faster. Each run seemed to be relatively random. I could
 * submit the same code twice ant it would run at 84ms and 104ms next. I wound up keeping the most readable solution. Can you
 * figure out how to remove the curr and last variables?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let last = null;
    let p = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr !== last) {
            nums[p++] = curr;
            last = curr;
        }
    }
    
    return p;
};
