/**
 * Singly-Linked List Node class
 */

class SLLNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /**
   * Singly-Linked List class
   */
  
  class SLL {
    constructor() {
      this.head = null; // the list is initially empty
    }
  
    insertAtBack(val) {
      const node = new SLLNode(val);
  
      if(!this.head) {
        this.head = node;
      } else {
        let runner = this.head;
  
        while(runner.next) {
          runner = runner.next;
        }
  
        runner.next = node;
      }
  
      return this;
    }
  
    /**
     * Determines whether the given value is in the list.
     * 
     * @param {any} val the value to find
     * @returns {boolean}
     */
  
    contains(val) {
      // your code here
      if(!this.head){
        return false;
      } 

      let run = this.head;

      while(run.next) {
        run = run.next
        if(run.val == val){
          return true;
        }
        
      }

      return false;
    }
  
    /**
     * Removes the last node and returns its value (or null if list is empty).
     * 
     * @returns {any|null}
     */
  
    removeBack() {
      // your code here
      if(this.head){
        if(this.head.next){

          let runner = this.head

          while(runner.next){
            if(!runner.next.next){
              var removed = runner.next.val
              runner.next = null;
              return removed
            }
            runner = runner.next
          }

        } else {
          var old_head = this.head
          this.head = null;
          return old_head
        }
      } else {
        return null;
      }
    }
  
    /**
     * BONUS: Finds and returns the maximum value (or null if list empty) recursively.
     * 
     * @param {SLLNode} node
     * @param {SLLNode} maxNode
     * @returns {any|null}
     */
    
    recursiveMax(node = this.head, maxNode = this.head) {
      if(node.next === null){
        if(node.val>maxNode.val){
          return node.val;
        } else {
          return maxNode.val;
        }
        
      }

      if(node.val>maxNode.val){
        return this.recursiveMax(node.next, node)
      } else {
        return this.recursiveMax(node.next, maxNode)
      }

    }
  }
  
  const list = new SLL();
  
  list.insertAtBack(5);
  list.insertAtBack(7);
  list.insertAtBack(6);
  
  console.log(list.contains(6)); // should log true
  console.log(list.contains(10)); // should log false
  
  console.log(list.removeBack()); // should log 6
  console.log(list.contains(6)); // should log false
  list.insertAtBack(20);
  
  console.log(list.recursiveMax()); // should log 20