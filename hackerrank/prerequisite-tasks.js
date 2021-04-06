/**
 * Prerequisite Tasks
 * URL: https://practice.geeksforgeeks.org/problems/prerequisite-tasks/1
 * Level: Medium
 * My Level: Hard as I've never seen the check for cycle algorithm, nor did I know to use it :(
 * See: https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563
 */

class Solution {
    
    makeGraph(prerequisites, n) {
        const map = new Array(n).fill(false);

        for (let i = 0; i <= prerequisites.length - 1; i++) {
            let p0 = prerequisites[i][0];
            let p1 = prerequisites[i][1];
    
            if (!map[p1]) {
                map[p1] = [];
            }        
            map[p1].push(p0);
        }
        return map;
    }

    isCyclic(graph, node, visited, edges) {
        // What's really going on here?
        if (!visited[node]) { 

            visited[node] = true;
            edges[node] = true;
            
            const set = graph[node];
            for (let i = 0; i < set.length; i++) {
                let n = set[i];
                if (edges[n] || this.isCyclic(graph, n, visited, edges)) {
                    return true;
                }
            }
        }
        
        edges[node] = false;
        return false;
    }
    
    isPossible(prerequisites, n, p) {
        // code here
        // [{0,1}, {1,2}, {2,3}]
        // 1 depends on 0
        // 2 depends on 1
        // 3 depends on 2
        // Doable
        
        const graph = this.makeGraph(prerequisites, n);

        let visited = new Array(n).fill(false);
        let stack = new Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            if (this.isCyclic(graph, i, visited, stack)) {
                return "No";
            }
        }
        
        return "Yes";
    }
    
}
