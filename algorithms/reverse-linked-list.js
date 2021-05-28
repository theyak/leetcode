function reverse(head) {
  let node = head;
  let previous = null;
  let tmp = null;
  
  while (node) {
    // Save next, we're gonna overwrite it!
    tmp = node.next;
    
    // First node will get an index of null, since it will now be last
    node.next = previous;
    
    // Go to next node
    previous = node;
    node = tmp;
  }
  
  return previous;
}
