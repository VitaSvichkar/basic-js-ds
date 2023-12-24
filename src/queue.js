const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.previous = null;
  }

}
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    
  }

  getUnderlyingList() {
    const arr = [];
    let currentElem = this.head;

    while(currentElem) {
      arr.push(currentElem.value);
      currentElem = currentElem.next;
    }
    return arr.length > 0 ? arr : null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    } else {
     this.head.previous = newNode;
     newNode.next = this.head;
     this.head = newNode;
    }
  }

  dequeue() {
     if (!this.tail) return null;
     const deletedValue = this.tail.value;
     if (this.tail.previous) {
      this.tail.next = null; 
      this.tail = this.tail.previous;
     } else {
      this.head = null;
      this.tail = null;
     }
     return deletedValue;
  }
}
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(3);
  queue.dequeue();
  queue.getUnderlyingList();

module.exports = {
  Queue
};
