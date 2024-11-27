// Node class to represent each element in the stack
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack class using a linked list
class Stack {
    constructor() {
        this.top = null; // Top points to the head of the linked list
        this.size = 0; // Tracks the size of the stack
    }

    // Add an element to the top of the stack (Push)
    push(data) {
        const newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode; // Stack is empty, set top to new node
        } else {
            newNode.next = this.top; // Link new node to the current top
            this.top = newNode; // Update top to the new node
        }
        this.size++;
    }

    // Remove and return the top element from the stack (Pop)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        const poppedData = this.top.data; // Get the data of the top node
        this.top = this.top.next; // Move top to the next node
        this.size--;
        return poppedData;
    }

    // View the top element without removing it (Peek)
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.top.data; // Return the data of the top node
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    // Print the stack (for debugging purposes)
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        let current = this.top;
        const result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Stack (top -> bottom):", result.join(" -> "));
    }
}

// Example usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: Stack (top -> bottom): 30 -> 20 -> 10

console.log("Top Element:", stack.peek()); // Output: Top Element: 30

console.log("Popped Element:", stack.pop()); // Output: Popped Element: 30
stack.print(); // Output: Stack (top -> bottom): 20 -> 10

console.log("Stack Size:", stack.getSize()); // Output: Stack Size: 2

stack.pop();
stack.pop();
console.log("Is Stack Empty?", stack.isEmpty()); // Output: Is Stack Empty? true
stack.print(); // Output: Stack is empty!
