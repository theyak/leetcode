/**
 * 11. Container With Most Water
 * URL: https://leetcode.com/problems/container-with-most-water/
 * Leetcode Level: medium
 * My Level: medium
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];
    let maxArea = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > maxArea) {
            maxArea = area;
        }
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }        
    }
    return maxArea;
};
