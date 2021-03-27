/**
 * 43. Multiply Strings
 * URL: https://leetcode.com/problems/multiply-strings/
 * Level: Medium (Tedious more than knowledge)
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * 
 * Constraints:
 * - 1 <= num1.length, num2.length <= 200
 * - num1 and num2 consist of digits only.
 * - Both num1 and num2 do not conain any leading zero, except the number 0 itself
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) { 
 
    // Some easy cases
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    
    if (num1 === "1") {
        return num2;
    }
    
    if (num2 === "1") {
        return num1;
    }
    
   
    // These items basically add up each row like you would in elementary school
    // The only real difference is that we add after each individual multiplication
    // instead of doing it all at the end. Just wound up being easier. Doesn't
    // actually save any time, and saves minimal memory.
    const adder = [];
    let adderStart = -1;
    let adderIndex = 0;
    let adderCarry = 0;

    
    for (let i = num2.length - 1; i >= 0; i--) { // 2nd number really
        let carry = 0;
        let digit = 0;
        adderStart++;
        adderIndex = adderStart;
        adderCarry = 0;
        
        for (let j = num1.length - 1; j >= 0; j--) { // 1st number
            const m = num1[j] * num2[i] + carry;
            
            digit = m % 10;
            carry = Math.floor(m / 10);
            
            if (adder.length <= adderIndex) {
                adder.push(0);
            }

            adder[adderIndex] += (digit + adderCarry);
            if (adder[adderIndex] >= 10) {
                adder[adderIndex] -= 10;
                adderCarry = 1;
            } else {
                adderCarry = 0;
            }

            adderIndex++;
        }

        // Deal with any left over carries
        if (carry) {
            if (adder.length <= adderIndex) {
                adder.push(0);
            }
            adder[adderIndex] = carry; 
        }
        if (adderCarry) {
            if (adder.length <= adderIndex) {
                adder.push(0);
            }
            adder[adderIndex] += adderCarry;        
        }
    }

    return adder.reverse().join("");
}
