/**
 * 1041. Robot Bounded In Circle
 * URL: https://leetcode.com/problems/robot-bounded-in-circle/
 * Explanation: https://leetcode.com/problems/robot-bounded-in-circle/discuss/1127532/Java-Solution-(with-explanation)
 * 
 * Notes: 
 * - The hints given here basically give away the solution, try not to read them and
 *   instead sketch out some possibilities.
 * - There may be some "faster" solutions, but likely less readable. They all
 *   run in O(n) time.
 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
const left = {
    "N": "W",
    "W": "S",
    "S": "E",
    "E": "N",
};
const right = {
    "N": "E",
    "E": "S",
    "S": "W",
    "W": "N",
};
const matrix = {
    "N": [0, 1],
    "S": [0, -1],
    "W": [-1, 0],
    "E": [1, 0],
};

var isRobotBounded = function(instructions) {
    let positions = [];
    let direction = "N";
    let location = [0, 0];
    
    for (let i = 0; i < instructions.length; i++) {
        const c = instructions[i];
        if (c === "G") {
            location[0] += matrix[direction][0];
            location[1] += matrix[direction][1];
        } else if (c === "L") {
            direction = left[direction];
        } else if (c === "R") {
            direction = right[direction];
        }
    }
    
    if (direction !== "N") {
        return true;
    }
    if (location[0] === 0 && location[1] === 0) {
        return true;
    }
    return false;
};
