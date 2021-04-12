/**
 * 986. Interval List Intersections
 * URL: https://leetcode.com/problems/interval-list-intersections/
 * Leetcode level: Medium
 * My Level: Easy (First try!)
 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let p1 = 0;
    let p2 = 0;
    let intervals = [];
    let start = 0;
    let end = 0;
    
    while (p1 < firstList.length && p2 < secondList.length) {
        if (firstList[p1][0] < secondList[p2][0]) {
            start = secondList[p2][0];
        } else {
            start = firstList[p1][0];
        }
        
        if (firstList[p1][1] < secondList[p2][1]) {
            end = firstList[p1][1];
            p1++;
        } else {
            end = secondList[p2][1];
            p2++;
        }        
        
        if (end >= start) {
            intervals.push([start, end]);
        }
    }
    return intervals;
};

// firstList = [[0,2],[5,10],[13,23],[24,25]]
// secondList = [[1,5],[8,12],[15,24],[25,26]]
// [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// [[0,2],[3,4],[5,10]]
// [[1,5],[8,12]]
// [[1,2],[3,4],[5,5],[8,10]]
