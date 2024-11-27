class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // Points to the first node
        this.rear = null;  // Points to the last node
        this.size = 0;     // Keeps track of the number of elements
    }

    // Enqueue operation: Adds an element to the end of the queue
    enqueue(data) {
        const newNode = new Node(data);

        if (this.rear === null) { // If the queue is empty
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode; // Link the new node to the last node
            this.rear = newNode;      // Update the rear pointer
        }

        this.size++;
    }

    // Dequeue operation: Removes an element from the front of the queue
    dequeue() {
        if (this.front === null) { // If the queue is empty
            console.log("Queue is empty");
            return null;
        }

        const removedData = this.front.data; // Store the data to return
        this.front = this.front.next;        // Move the front pointer to the next node

        if (this.front === null) {          // If the queue is now empty
            this.rear = null;               // Update rear pointer to null
        }

        this.size--;
        return removedData;
    }

    // Peek operation: Returns the front element without removing it
    peek() {
        if (this.front === null) {
            console.log("Queue is empty");
            return null;
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }

    // Print the queue elements (for debugging)
    printQueue() {
        let current = this.front;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        console.log(result + "null");
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.peek()); // Output: 10
queue.printQueue();                          // Output: 10 -> 20 -> 30 -> null

console.log("Dequeued:", queue.dequeue());   // Output: 10
queue.printQueue();                          // Output: 20 -> 30 -> null

console.log("Queue size:", queue.getSize()); // Output: 2
