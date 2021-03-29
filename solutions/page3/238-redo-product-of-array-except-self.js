/**
 * 238. Product of Array Except Self
 * URL: https://leetcode.com/problems/product-of-array-except-self/
 * Leetcode Level: Medium 
 * My Level: Hard
 *
 * Notes: I came up with the need for left and right arrays on my own.
 * However, I failed to figure out how to put them together properly.
 * I had to go to solution for that. Worth redoing this problem.
 * Turned out it was mostly an off-by-one error in my thinking.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = new Array(nums.length).fill(1, 0, nums.length);
    const right = new Array(nums.length).fill(1, 0, nums.length);
    const answer = new Array(nums.length);
    
    
    left[0] = 1;
    right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
};

// Found this in the discission. This is the O(1) verion.
// I definitely did not come up with this on my own.
var productExceptSelfO1 = function(nums) {
    let answer = new Array(nums.length);
    answer = answer.fill(1, 0, nums.length);
    
    let l = 0;
    let r = nums.length - 1;;
    let lp = 1;
    let rp = 1;
    
    while (l < nums.length) {
        answer[l] *= lp;
        answer[r] *= rp;
        
        lp *= nums[l];
        rp *= nums[r];
        
        l++;
        r--;
    }
    
    return answer;
};
