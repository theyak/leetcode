/**
 * 208. Implement Trie (Prefix Tree)
 * URL: https://leetcode.com/problems/implement-trie-prefix-tree/
 * Leetcode Level: Medium
 * My Level: Easy
 *
 * There are some language optimizations that will cause this to run faster,
 * but I went with readability over speed.
 */

/**
 * A node in the tree
 */
var TrieNode = function(value) {
    this.links = Array(26);
    this.val = value;
    this.isEnd = false;
    
    this.has = function(c) {
        c = this.getCode(c);
        return !!this.links[c];
    }
    
    this.get = function(c) {
        c = this.getCode(c);

        if (this.links[c]) {
            return this.links[c];
        }
        return null;
    }
    
    this.put = function(c, node) {
        c = this.getCode(c);
        this.links[c] = node;
    }
    
    this.getCode = function(c) {
        if (typeof c === "string") {
            c = c.charCodeAt(0);
        }
        
        if (c >= 97) {
            return c - 97;
        } else if (c >= 65) {
            return c - 65;
        }
        return c;
    }
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};


/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
        const c = word.charAt(i);
        if (!node.has(c)) {
            node.put(c, new TrieNode(c));
        }
        
        node = node.get(c);
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.startsWith(word);  
    return !!(node && node.isEnd);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for (let i = 0; i < prefix.length && node; i++) {
        const c = prefix.charAt(i);
        node = node.get(c);
    }
 
    return node || false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
