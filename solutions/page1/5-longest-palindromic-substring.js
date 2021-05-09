/**
 * 5. Longest Palindromic Substring
 * URL: https://leetcode.com/problems/longest-palindromic-substring/
 * Leetcode Level: Medium
 * My Level: Medium - I didn't come up with the optimal solution, but came up with an acceptable one.
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Note, I went the wrong direction to start with as Leetcode said this was a dynamic programming problem.
 * My original solution used that a bit, but wasn't the optimal solution. The optimal solution I wouldn't
 * consider to be dynamic programming.
 */

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    
    // If no palindrome, then return first character.
    // 0 and 1 indexes allow for this. Yay.
    let longest = [0, 1];
    
    for (let i = 0; i < s.length - 1; i++) {
        // Case of two characters next to each other
        // aa pattern
        if (s[i] === s[i + 1]) {
            getPalindrome(i, i + 1);
        }
        
        
        // aba pattern
        if (i < s.length - 2 && s[i] === s[i + 2]) {
            getPalindrome(i, i + 2);
        }
    }
    return s.slice(longest[0], longest[1]);
    
    
    // Basically what we do here is take nearby characters and spread out
    // until there is no palindrome
    function getPalindrome(start, end) {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
        }
        start++;
        
        if (end - start + 1 > longest[1] - longest[0]) {
            longest[1] = end;
            longest[0] = start;
            return [start, end];
        }
        return false;
    }
}

// OK, this was my original solution. It works, but it's slow.
var longestPalindromeOriginal = function(s) {
    let longest = "";
    let indexes = new Map();
    
    if (s.length <= 1) {
        return s;
    }
    
    // baabxyz
    // xyzbaab
    // zybaabz
    
    // OK, gonna start with an almost brute force algorithm
    // We'll see if we can even get that to work.
    // The idea is to store the index of each character and then look for palindromes
    
    function isPal(s) {
        for (let i = 0, j = s.length - 1; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        
        return true;
    }
    
    // Brute for by indexes. Ugh. This sucks
    function checkForPalindromesOriginal(s, p) {
        for (let i = 0; i < p.length - 1; i++) {
            for (let j = i + 1; j < p.length; j++) {
                if (p[j] - p[i] + 1 <= longest.length) {
                    continue;
                }
                const substr = s.slice(p[i], p[j] + 1);
                if (substr.length > longest.length && isPal(substr)) {
                    longest = substr;
                }
            }
        }
    }
   

    // Can am optimization be made with making the j loop decreasing?
    // Another optimization is stopping when what's left is shorter than current longest
    function checkForPalindromes(s, p) {
        for (let i = 0; i < p.length - 1; i++) {
            for (let j = p.length - 1; j > i; j--) {
                
                // Optimization: Check if pointers would be smaller than current longest
                if ((p[j] - p[i] + 1) < longest.length) {
                    continue;
                }
                
                const substr = s.slice(p[i], p[j] + 1);
                if (isPal(substr)) {
                    longest = substr;
                    
                    // Optimization: Break out of j loop as all additional checks would be shorter
                    continue;
                }                
            }
        }
    }

    // Index all positions of characters
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        let p = indexes.get(c);
        if (!p) {
            p = [];
        }
        indexes.set(c, [...p, i]);
    }
    
    // Index of checked characters
    let checked = new Map();
    
    // Ready? Set? Go!
    for (let i = 0; i < s.length - 1; i++) {
        const c = s[i];
        
        // Don't check same character multiple times
        if (checked.has(c)) {
            continue;
        }
        checked.set(c, true);
        
        let p = indexes.get(c);
        
        // Only 1 index (or none, lolwut?) means no palindrome
        if (!p || p.length <= 1) {
            continue;
        }
        
        // Ugh, crap, this won't work. What if indexes are like [1, 4, 29, 39, 50]
        // How do I check all in a timely manner? Oh well, I'll brute force it for now
        checkForPalindromes(s, p);
    }
    
    if (!longest) {
        return s[0];
    }
    
    return longest;
    
};
