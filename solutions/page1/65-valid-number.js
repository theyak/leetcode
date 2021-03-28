/**
 * 65. Valid Number
 * URL: https://leetcode.com/problems/valid-number/
 * Level: Hard (Early problem would now probably be reclassified as easy or medium)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // Beginning of string
    // Optional + or -
    // Big group ((\d+(\.\d+)?|(\d+\.)|(\.\d+))) One of...
    //   - One or more digits digits with optional (decimal followed by one or more digits)
    //   - One or more digits followed by decimal
    //   - Decimal followed by one or more digits
    // Next group, the exponent
    //   - E or e
    //   - Optional + or -
    //   - One or more digits
    // End of string
    
    return /^[+-]?((\d+(\.\d+)?|(\d+\.)|(\.\d+)))([Ee][+-]?\d+)?$/.test(s);
}

// This is how you could do it in a non-regex language
// Though I still cheat and use some regex that could probably easily be broken out.
var isNumberNonRegEx = function(s) {
    // Check first character. Must be digit, +, -, or .
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "."].indexOf(s[0]) < 0) {
        return false;
    }
    
    // Split up at e
    let parts = s.split(/[eE]/);
    // There needs to be no E or exactly one E with stuff on each side of it.
    // There will be more checks later
    if (parts.length > 2) {
        return false;
    }

    // If we have an exponent, it must be followed by an integer.
    if (parts.length === 2) {
        if (!parts[1].match(/^[-+]?\d{1,}$/)) {
            return false;
        }
    }
    
    
    // OK, let's focus on the main part. If it starts with + or -, we can skip it
    let main = parts[0];
    if (main[0] === '+' || main[0] === '-') {
        main = main.substr(1);
        if (main.length <= 0) {
            return false;
        }
    }
    
    parts = main.split(".");
    
    // We need a digit on at least one side of decimal
    if (parts.length > 2) {
        return false;
    }
    if (parts[0].length === 0 && parts[1].length === 0) {
        return false;
    }

    // Everything else must be a digit
    if (!parts[0].match(/^\d{0,}$/)) {
        return false;
    }
    
    if (parts.length > 1 && !parts[1].match(/^\d{0,}$/)) {
        return false;
    }

    return true;
};
