/**
 * 973. K Closest Points to Origin
 * URL: https://leetcode.com/problems/k-closest-points-to-origin/
 * Level: Medium
 *
 * There is a better algorithm for this using something called QuickSelect. I couldn't
 * figure it out in the time I alot myself for each problem, but it is described in
 * the solution and the faster JavaScript solutions use it.
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// Fourth attempt - memoization - About the same as attempts 2 and 3. Actually slower.
var kClosest = function(points, k) {
    
    let memo = new Map();
    function dist(point) {
        let distance = memo.get(point);
        if (!distance) {
            distance = point[0] ** 2 + point[1] ** 2;
            memo.set(point, distance);
        }
        return distance;
    }
    
    const distances = [];
    const result = [];
    
    for (let i = 0; i < points.length; i++) {
        distances[i] = dist(points[i]);
    }
    
    distances.sort((a, b) => a - b);
    const bound = distances[k - 1];
    
    for (let i = 0; i < points.length; i++) {
        distance = dist(points[i]);
        if (distance <= bound) {
            result.push(points[i]);
        }
    }
    
    return result;
}



// Third attempt - about the same as attempt 2
var kClosest3 = function(points, k) {
    const distances = [];
    const result = [];
    
    for (let i = 0; i < points.length; i++) {
        distances[i] = points[i][0] ** 2 + points[i][1] ** 2;
    }
    
    distances.sort((a, b) => a - b);
    const bound = distances[k - 1];
    
    for (let i = 0; i < points.length; i++) {
        distance = points[i][0] ** 2 + points[i][1] ** 2;
        if (distance <= bound) {
            result.push(points[i]);
        }
    }
    
    return result;
}

// Second attempt, meh.
var kClosest2 = function(points, k) {
    const distances = [];
    
    points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2));
    points.length = k;
    return points;
    
}

// First attempt. Super slow
var kClosest1 = function(points, k) {
    const distances = [];
    const closest = [];
    let bound = 0;
    
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const distance = ((x ** 2) + (y ** 2));
        
        
        if (closest.length < k) {
            distances.push(distance);
            closest.push(points[i]);
            bound = Math.max(bound, distance);
        } else if (distance < bound) {
            const index = distances.indexOf(bound); // This might just make sort faster. We'll try
            distances.splice(index, 1);
            closest.splice(index, 1);
            distances.push(distance);
            closest.push(points[i]);
            bound = distances.reduce((i, d) => d > i ? d : i, 0);
        }
    }

    return closest;
};
