// Queue implementation using an array
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Return the front element without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Empty the queue
    clear() {
      this.items = [];
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.front()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.size());   // Output: 2
  console.log(queue.isEmpty()); // Output: false
  