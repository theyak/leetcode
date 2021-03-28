/**
 * 253. Meeting Rooms II 
 * URL: https://leetcode.com/problems/meeting-rooms-ii/
 * Level: Medium
 *
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // Things we know
    // - start time
    // - end time
    // - length of meeting
    // Can any of theses things help us? Min time? Max time? Earlier start time? Later end time?  Later start time? Earlier end time?
    
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log("Sort by start time ascending", intervals);

    // intervals.sort((a, b) => b[0] - a[0]);
    // console.log("Sort by start time descending", intervals);

    // intervals.sort((a, b) => a[1] - b[1]);
    // console.log("Sort by end time ascending", intervals);

    // intervals.sort((a, b) => b[1] - a[1]);
    // console.log("Sort by end time descending", intervals);

    // intervals.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));
    // console.log("Sort by time ascending", intervals);

    // intervals.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    // console.log("Sort by time descending", intervals);
    
    /**
    Sort by start time ascending [ [ 0, 30 ], [ 5, 10 ], [ 15, 20 ] ]
    Sort by start time descending [ [ 15, 20 ], [ 5, 10 ], [ 0, 30 ] ]
    Sort by end time ascending [ [ 5, 10 ], [ 15, 20 ], [ 0, 30 ] ]
    Sort by end time descending [ [ 0, 30 ], [ 15, 20 ], [ 5, 10 ] ]
    Sort by time ascending [ [ 15, 20 ], [ 5, 10 ], [ 0, 30 ] ]
    Sort by time descending [ [ 0, 30 ], [ 15, 20 ], [ 5, 10 ] ]
    */
    
    // Gonna try working with time descending (cuz it's what I currently have, I'll then try others)
    // NVM, that failed, gonna try working with start time as that seems most likely to work with dynamic programming
    const rooms = [];
    rooms.push([intervals[0]]);
    
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        
        // Find where meeting would fit
        let found = false;
        for (let ri = 0; ri < rooms.length; ri++) {
            // End element tells us when meeting ends, which one ends earliest (does this matter? Try W/O first, it's easier), and before current meeting starts? 
            
            const meeting = rooms[ri][rooms[ri].length - 1];
            if (meeting[1] <= interval[0]) {
                found = true;
                rooms[ri].push(interval);
                break;
            }
        }
        
        // If we couldn't find a place to hold the meeting add a new meeting room
        // because space is always readily available!
        if (!found) {
            rooms.push([interval]);
        }
    }
    
    return rooms.length;
};
