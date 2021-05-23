/**
 * 17. Letter Combinations of a Phone Number
 * URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Leetcode level: medium
 * My level: easy
 *
 * Note: My result ran anywhere from 76 ms to 124 ms. Therefore, I'm not sure
 * how efficient my algorithm actually is.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
};


var letterCombinations = function(digits) {
    if (digits.length <= 0) {
        return [];
    }
    
    let answers = [];
    helper(answers, digits, "");
    return answers;
};

function helper(answers, digits, str) {
    if (str.length === digits.length) {
        answers.push(str);
        return;
    }
    
    let digit = digits[str.length];
    let m = map[digit];
    for (let j = 0; j < m.length; j++) {
        helper(answers, digits, str + m[j]);
    }
}
