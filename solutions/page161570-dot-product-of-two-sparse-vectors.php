<?php
/**
 * 1570. Dot Product of Two Sparse Vectors
 * URL: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * Leetcode level: Medium 
 * My level: Easy
 */

class SparseVector {
    public $vector = [];
    
    /**
     * @param Integer[] $nums
     */
    function __construct($nums) {
        foreach ($nums as $k => $v) {
            if ($v) {
                $this->vector[$k] = $v;
            }
        }
    }
    
    // Return the dotProduct of two sparse vectors
    /**
     * @param SparseVector $vec
     * @return Integer
     */
    function dotProduct($vec) {
        $sum = 0;
        
        foreach ($this->vector as $k => $v) {
            if (isset($vec->vector[$k])) {
                $sum += $v * $vec->vector[$k];
            }
        }
        return $sum;
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * $v1 = new SparseVector($nums1);
 * $v2 = new SparseVector($nums2);
 * $ans = $v1->dotProduct($v2);
 */
