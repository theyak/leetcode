/**
 * 528. Random Pick with Weight
 * URL: https://leetcode.com/problems/random-pick-with-weight/
 * Leetcode Level: Medium
 * My Level: Medium
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.ranges = [];
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.ranges[i] = this.sum - 1;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    // From test case and how I figure out what
    // this problem actually was. Description is meh.
    // 3/25 chance to pick 0
    // 14/25 chance to pick 1
    // 1/25 chance to pick 2
    // 7/25 chance to pick 3
    
    const p = Math.floor(Math.random() * this.sum);
    
    // Linear search
    // for (let i = 0; i < this.ranges.length; i++) {
    //     if (p <= this.ranges[i]) {
    //         return i;
    //     }
    // }
    
    // Binary search (let's see if I can do this without looking up the algorithm)   
    // Oh man! Runtime: 168 ms, faster than 99.85% of JavaScript online submissions for Random Pick with Weight.
    let left = 0;
    let right = this.ranges.length - 1;
    
    while (left < right) {
        const mid = (left + right) >> 1;
    
        if (p > this.ranges[mid])
            left = mid + 1
        else
            right = mid
    }

    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
