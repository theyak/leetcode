/**
 * 211. Design Add and Search Words Data Structure
 * URL: https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * Leetcode Level: Medium
 * My Level: Medium
 *
 * I initially thought this was a trie data structure, which is common for this
 * type of problem. I did manage to get that to work, but it was slow, beating
 * only 5% of other JavaScript solutions. There's another problem with the trie.
 * You would unlikely be able to implement an entire trie algorithm in a 45 minute
 * interview. Well, maybe if you are a contest programmer you could. So, other
 * solutions had to also be investigated. I settled on a hash map of words
 * mapped to their length, then just search those words. This is suitable for
 * this problem as there will be at most 50,000 words. This might be sketchy
 * for a full language with an entire set of words. How many words are there,
 * anyway? 
 *
 * With the hashmap, I first tried using a regular expression, just changing
 * . to [a-z]. This worked, but was still slow, beating only 15% of solutions.
 * Well, that was annoying. I finally just tried a character search and that
 * improved things beating 77% of solutions. Still not great, but it's something.
 *
 * The key take away here is that even if it seems at first like a certain
 * data structure should be used, consider other possibilities, especially
 * when it comes to those that are easier to code.
 */

var WordDictionary = function() {
    this.words = {};
};

WordDictionary.prototype.addWord = function(word) {
    if (!this.words[word.length]) {
        this.words[word.length] = [];
    }
    this.words[word.length].push(word);
};


WordDictionary.prototype.search = function(word) {
    let len = word.length;
    
    if (!this.words[len]) {
        return false;
    }
    
    if (word.includes(".")) {
        let v = this.words[len];
        for (let i = 0; i < v.length; i++) {
            let found = true;
            let s = v[i];
            for (let j = 0; j < word.length; j++) {
                if (word[j] !== '.' && word[j] !== s[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return true;
            }
        }
    } else {
        for (let i = 0; i < this.words[len].length; i++) {
            if (this.words[len][i] === word) {
                return true;
            }
        }        
    }
    return false;
    
    
    
    if (word.includes(".")) {    
        let exp = new RegExp("^" + word.replace(/\./g, "[a-z]") + "$");
        for (let i = 0; i < this.words[len].length; i++) {
            if (exp.test(this.words[len][i])) {
                return true;
            }
        }
    } else {
        for (let i = 0; i < this.words[len].length; i++) {
            if (this.words[len][i] === word) {
                return true;
            }
        }
    }
    return false;
};


// /**
//  * A node in the tree
//  */
// var TrieNode = function(value) {
//     this.links = Array(26);
//     this.val = value;
//     this.isEnd = false;
    
//     this.has = function(c) {
//         c = this.getCode(c);
//         return !!this.links[c];
//     }
      
//     this.get = function(c) {
//         c = this.getCode(c);

//         if (this.links[c]) {
//             return this.links[c];
//         }
//         return null;
//     }
    
//     this.put = function(c, node) {
//         c = this.getCode(c);
//         this.links[c] = node;
//     }
    
//     this.getCode = function(c) {
//         if (typeof c === "string") {
//             c = c.charCodeAt(0);
//         }
        
//         if (c >= 97) {
//             return c - 97;
//         }
//         return c;
//     }
// }


// /**
//  * Initialize your data structure here.
//  */
// var WordDictionary = function() {
//     this.root = new TrieNode();
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// WordDictionary.prototype.addWord = function(word) {
//     let node = this.root;
    
//     for (let i = 0; i < word.length; i++) {
//         const c = word.charAt(i);
//         if (!node.has(c)) {
//             node.put(c, new TrieNode(c));
//         }
        
//         node = node.get(c);
//     }

//     node.isEnd = true;
// };
// /** 
//  * @param {string} word
//  * @return {boolean}
//  */


// WordDictionary.prototype.search = function(word) {
//     let node = this.root;
    
    
//     function helper(node, index) {
//         if (index >= word.length) {
//             return true;
//         }
        
//         const c = word[index];
//         if (c === ".") {
//             // If last character
//             if (index === word.length - 1) {
//                 for (let i = 0; i < 26; i++) {
//                     if (node.has(i) && node.get(i).isEnd) {
//                         return true;
//                     }
//                 }
//                 return false;
//             }
            
            
//             let found = false;
//             for (let i = 0; i < 26; i++) {
//                 if (node.has(i)) {
//                     let x = helper(node.get(i), index + 1);
//                     if (x) {
//                         found = true;
//                     }
//                 }
//             }
//             return !!found;
//         } else if (node.has(c)) {
//             const n = node.get(c);
//             // If last character
//             if (index === word.length - 1) {
//                 return n.isEnd;
//             }
            
//             let x = helper(n, index + 1);
//             return x;
//         } else {
//             return false;
//         }
//     }
//     return helper(node, 0);
// };

// /** 
//  * Your WordDictionary object will be instantiated and called as such:
//  * var obj = new WordDictionary()
//  * obj.addWord(word)
//  * var param_2 = obj.search(word)
//  */


