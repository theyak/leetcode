/**
 * 269. Alien Dictionary
 * URL: https://leetcode.com/problems/alien-dictionary/
 * Leetcode Level: Hard
 * My Level: Yeah, hard
 */

/**
 * @param {string[]} words in sorted order based on alien's alphabet, almost. Could be a prefix word (strange condition, eh?)
 * @return {string} Letters in alphabetical order, or at least as in order as we can make it given our word list.
 */
var alienOrder = function(words) {
    // Define data structures
    let inDegrees = new Map();
    let adjList = new Map();
    
    // Initialize data structures
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            if (!inDegrees.has(word[i])) {
                inDegrees.set(word[i], 0);
                adjList.set(word[i], []);                
            }
        }
    }
    
   
    // Make edge adjacency map
    // We do this by finding first different letter between the two words
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        
        // Do that weird lexographically smaller check
        if (word1.length > word2.length) {
            if (word1.substr(0, word2.length) === word2) {
                return "";
            }
        }
        
        // Look for difference
        let max = Math.min(word1.length, word2.length);
        for (let j = 0; j < max; j++) {
            if (word1[j] !== word2[j]) {            
                let a = adjList.get(word1[j]);
                if (a.indexOf(word2[j]) < 0) {
                    let b = [...a, word2[j]];
                    adjList.set(word1[j], b);
                    inDegrees.set(word2[j], inDegrees.get(word2[j]) + 1);
                }
                break;
            }
        }
    }
          
    // BFS
    let q = [];
    let s = ""; // The return string
    
    // We first add all nodes with 0 indegrees. These are our start nodes
    for (let a of inDegrees) {
        if (a[1] === 0) {
            q.unshift(a[0]);
        }
    }

    // Our regular, ordinary, BFS algorithm
    while (q.length > 0) {
        let c = q.pop();
        
        // Get neighbors of c
        let neighbors = adjList.get(c);
        for (let n of neighbors) {
            inDegrees.set(n, inDegrees.get(n) - 1);
            if (inDegrees.get(n) === 0) {
                q.unshift(n);
            }
        }
        
        s += c;    
    }
    
    // This happens if there is a cycle. Weird language they have!
    if (s.length < inDegrees.size) {
        return "";
    }
    
    return s;
};
