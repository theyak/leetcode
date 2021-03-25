/**
 * Given an array nums of n integers, are there elements a, b, c 
 * in nums such that a + b + c = 0? Find all unique triplets in the 
 * array which gives the sum of zero.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Leetcode level: medium
 * Algorithm used: Sliding Window, front/back (https://medium.com/outco/28d67601a66)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const sums = [];
    
    if (nums.length < 3) {
        return [];
    }

    // Srting will allow us to keep front and back pointers
    nums.sort((a, b) => a - b);

    for (let i = 0; i <= nums.length - 2; i++) {
        // Check if we already processed this number
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let front = i + 1;
        let back = nums.length - 1;
       
        while (front < back) {
            const sum = nums[i] + nums[front] + nums[back];
            
            // Oh lookie! We found a triplet
            if (sum === 0) {
                sums.push([nums[i], nums[front], nums[back]]);
                
                front++;
                back--;
                
                // Skip past duplicate numbers.
                // This will prevent us from storing the triplet more than once
                while (front < back && nums[front] === nums[front - 1]) {
                    front++;
                }
                while (front < back && nums[back] === nums[back + 1]) {
                    back--;
                }
            } else if (sum > 0) {
                back--;
            } else if (sum < 0) {
                front++;
            }   
        }
    }

    return sums;
}
