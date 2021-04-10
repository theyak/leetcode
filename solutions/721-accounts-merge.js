/**
 * 721. Accounts Merge
 * URL: https://leetcode.com/problems/accounts-merge/
 * Leetcode Level: Medium
 * My Level: Hard
 *
 * This took me forever to figure out, though once it was figured out, it
 * seemed super easy. Just silly graphs. I dunno, maybe I'm just not cut out for this.
 *
 * Runtime: 132 ms, faster than 95.88% of JavaScript online submissions for Accounts Merge.
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {
    
    // First, just make things more readable for my mind
    accounts = accounts.map(account => {
        return {
            name: account[0],
            emails: account.slice(1),
        };
    });
    
    
    // Okey, let's make a graph. We'll map each email to a list of all its neighbors
    // At the same time, we'll build a map of email addresses to name
    const graph = new Map();
    const emailNameMap = new Map();
    accounts.forEach(account => {
        const name = account.name;
        const email = account.emails[0];
        emailNameMap.set(email, name);

        if (!graph.has(email)) {
            graph.set(email, []);
        }
        
        for (let i = 1; i < account.emails.length; i++) { 
            const neighbor = account.emails[i];
            if (!graph.has(neighbor)) {
                graph.set(neighbor, []);
                emailNameMap.set(neighbor, name);
            }
            
            graph.get(email).push(neighbor);
            graph.get(neighbor).push(email);            
        }
    });

    
    
    
    // This is where we will store our solution
    const result = [];
    
    // Go through each email in the set doing an iterative DFS
    const visited = new Set(); 
    const stack = [];
    graph.forEach((_, email) => {
        
        // Recursive version
        // const list = [];
        // function dfs(em, list) {
        //     if (visited.has(em)) {
        //         return;
        //     }
        //     visited.add(em);
        //     list.push(em); // Pre-order. Doesn't matter
        //     graph.get(em).forEach(e => dfs(e, list));
        // }
        // dfs(email, list);
        // if (list.length) {
        //     list.sort();
        //     result.push([emailNameMap.get(list[0]), ...list]);
        // }
        
        // Iterative version
        if (!visited.has(email)) {
            visited.add(email);           
            stack.push(email);
            
            const emails = [];

            while (stack.length) {
                
                // Pop email to look at
                const node = stack.pop();
                emails.push(node);
                
                const neighbors = graph.get(node);

                neighbors.forEach(neighbor => {
                   if (!visited.has(neighbor)) {
                       visited.add(neighbor);
                       stack.push(neighbor);
                   } 
                });
            }
            
            // Put it in format requested by problem, name and sorted email addresses
            emails.sort();
            result.push([emailNameMap.get(email), ...emails]); 
        }
   });    
    
    return result;
};
