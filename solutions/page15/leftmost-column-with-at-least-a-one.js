/**
 * 1428. Leftmost Column with at Least a One
 * URL: https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
 * Level: Medium
 */

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [rows, cols] = binaryMatrix.dimensions();
    let minColumn = Infinity;

    let start = 0;
    let end = cols - 1;
    
    while (start <= end) {
        let index = Math.floor((end + start) / 2);
        let found = false;
        for (let row = 0; row < rows; row++) {
            let value = binaryMatrix.get(row, index);
            if (value === 1) {
                found = true;
                break;
            }
        }
        
        if (found) {
            minColumn = Math.min(index, minColumn);
            end = index - 1;
        } else {
            start = index + 1;
        }
    }
    
    if (minColumn < Infinity) {
        return minColumn;
    }
    
    return -1;
}
