<?php
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Note: ALL inputs will have exactly one solution. No error checking needed for this problem.
 * Note: This took about 3 minutes to write. About 3 years faster than all my other problems.
 * Note: This is the easiest problem on leetcode which is probably why I spent the time making this repo.
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $map = [];
        
        foreach ($nums as $k => $num) {
			// Check if answer already exists
            $other = $target - $num;
            if (isset($map[$other])) {
                return [$map[$other], $k];
            }  
            
            // Replacements are fine, though the problem description says 
            // there's exactly one solution, so doubtful that's an issue.
            $map[$num] = $k;
        }
    }
}
