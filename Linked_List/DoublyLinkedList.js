// Node class for a doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert a node at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = this.tail = newNode; // List is empty
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Insert a node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.head = this.tail = newNode; // List is empty
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Insert a node after a specific node
    insertAfter(nodeData, data) {
        let current = this.head;
        while (current !== null && current.data !== nodeData) {
            current = current.next;
        }

        if (current === null) {
            console.log("Node not found!");
            return;
        }

        const newNode = new Node(data);
        newNode.next = current.next;
        newNode.prev = current;

        if (current.next !== null) {
            current.next.prev = newNode;
        } else {
            this.tail = newNode; // Update tail if inserted at the end
        }

        current.next = newNode;
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward:", result.join(" <-> "));
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward:", result.join(" <-> "));
    }
}

// Usage example
const dll = new DoublyLinkedList();
dll.insertAtBeginning(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.insertAfter(20, 25);
dll.printForward(); // Output: Forward: 10 <-> 20 <-> 25 <-> 30
// dll.printBackward(); // Output: Backward: 30 <-> 25 <-> 20 <-> 10



