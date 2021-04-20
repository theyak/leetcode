/**
 * 29. Divide Two Integers
 * URL: https://leetcode.com/problems/divide-two-integers/submissions/
 * Leetcode Level: Medium
 * My Level: Hard (Took forever to figure out algorithm)
 *
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 *
 * Note: This isn't quite right. There's some multiplication and division at the end
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let negative = 0;
    let max = 2 ** 31 - 1;
    let min = (-2) ** 31;
    let quotient = 0;

    // Handle overflow situation
    if (divisor === -1 && dividend === min) {
        return max;
    }
    
    // Handle cases in which values are the same or opposites
    if (divisor == dividend) {
        if (negative & 1) {
            return -1;
        }
        return 1;
    }

    // Work with positive numbers
    if (dividend < 0) negative++, dividend = -dividend;
    if (divisor < 0) negative++, divisor = -divisor;
        
    // Do the calculation
    while (divisor <= dividend) {
        let power = divisor;
        let count = -1;
        
        // We check the power of 2 ** 30 otherwise overflow would occur.
        while (power <= dividend && power < 2 ** 30) {
            power += power;
            count ++;
        }
        power >>= 1; // Am I cheating here? This is a division

        dividend -= power;
        quotient += (2 ** count); // Am I cheating here? This is a multiplication
    }
    
    if (negative & 1) {
        return -quotient;
    }
    return quotient;
};
