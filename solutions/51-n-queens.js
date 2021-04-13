/**
 * 51. N-Queens
 * URL: https://leetcode.com/problems/n-queens/
 * Leetcode Level: Hard 
 * My Level: Medium (though I read the backtracking article just before solving)
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two
 * queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * This problem is almost exactly the same as 52. N-Queens ii, just with a different output format.
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    const placements = new Set();
    const boards = [];
    
    
    /**
     * Determine if queen can be placed at position
     */
    function canPlace(row, col) {
        if (cols.has(col)) {
            return false;
        }
        
        // Neat thing from solution to calculate diagonal
        if (diag1.has(row - col)) {
            return false;
        }
        
        // And the anti-diagonal
        if (diag2.has(row + col)) {
            return false;
        }
        
        return true;
    }
    
    
    /**
     * Place a queen at the location
     */
    function place(row, col) {
        cols.add(col);
        diag1.add(row - col);
        diag2.add(row + col);
        placements.add(row * n + col);
    }
    
    /**
     * Remove queen. We do this at end of backtrack iterator
     */
    function remove(row, col) {
        cols.delete(col);
        diag1.delete(row - col);
        diag2.delete(row + col);
        placements.delete(row * n + col);
    }
    
    function backtrack(row) {
        // If we are at the end of rows, we've found a solution.
        // Return a 1 so that it can be added to total number of solutions
        if (row >= n) {
            boards.push(Array.from(placements.values()));
            return 1;
        }
        
        let solutions = 0;
        
        for (let col = 0; col < n; col++) {
            if (canPlace(row, col)) {
                place(row, col);
                solutions += backtrack(row + 1);
                remove(row, col);
            }
        }
        
        return solutions;
    }
    
    backtrack(0);
    
    // Create output boards
    const result = [];
    for (let i = 0; i < boards.length; i++) {
        const board = [];
        for (let pos of boards[i]) {
            let line = new Array(n).fill(".");
            line[pos % n] = "Q";
            board.push(line.join(""));
        }
        result.push(board);
    }
    
    return result;
};
