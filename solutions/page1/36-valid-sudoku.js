/**
 * 36. Valid Sudoku
 * URL: https://leetcode.com/problems/valid-sudoku/
 * Leetcode Level: medium
 * My Level: easy
 *
 * This shows two ways of doing this, one brute force, one more like dynamic programming.
 * Though one seems to be O(3n * n^2) and the other O(n^2), there wasn't much actual 
 * difference in time.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9);
    let cols = new Array(9);
    let box = new Array(9);
    
    for (let i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        box[i] = {};
    }
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (!isValid(board, row, col)) {
                return false;
            }
        }
    }
    return true;

    function isValid(board, row, col) {
        let num = board[row][col];
        if (num === ".") {
            return true;
        }

        let boxId = parseInt(row / 3) * 3 + parseInt(col / 3);

        if (box[boxId][num] || rows[row][num] || cols[col][num]) {
            return false;
        }
        
        box[boxId][num] = rows[row][num] = cols[col][num] = true;
        return true;
    }
};


function isValid1(board, row, col) {
    let num = board[row][col];
    if (num === ".") {
        return true;
    }
    
    // How do we check the box?
    let count = 0;
    let startRow = parseInt(row / 3) * 3;
    let startCol = parseInt(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) {
                count++;
                if (count > 1) {
                    return false;
                }
            }        
        }
    }
    
    // Check row
    count = 0;
    for (let i = 0; i < board[row].length; i++) {
        if (board[row][i] === num) {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }
    
    // Check column
    count = 0;
    for (let i = 0; i < board[row].length; i++) {
        if (board[i][col] === num) {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }
    
    return true;
}
