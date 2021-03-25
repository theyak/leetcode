/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let letters = "";
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (letters.includes(c)) {
            if (result < letters.length) {
                result = letters.length;
            }

            // Get string after character, thus making a new
            // substring of unique letters. We add current
            // letter below. This is basically a sliding window.
            letters = letters.slice(letters.indexOf(c) + 1);
        }
        letters += c;
    }

    return result < letters.length ? letters.length : result;
}

