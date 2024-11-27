// Node class for a circular linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Circular Linked List class
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a node at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            newNode.next = newNode; // Points to itself (single-node circular list)
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== this.head) {
                tail = tail.next; // Find the last node
            }
            newNode.next = this.head;
            tail.next = newNode;
            this.head = newNode;
        }
    }

    // Insert a node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            newNode.next = newNode; // Points to itself (single-node circular list)
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== this.head) {
                tail = tail.next; // Find the last node
            }
            tail.next = newNode;
            newNode.next = this.head;
        }
    }

    // Print the circular linked list
    printList() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        const result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        console.log("Circular List:", result.join(" -> ") + " -> (back to head)");
    }

    // Delete a node with a specific value
    deleteNode(value) {
        if (this.head === null) {
            console.log("The list is empty. Nothing to delete.");
            return;
        }

        // Special case: deleting the head node
        if (this.head.data === value) {
            let tail = this.head;
            while (tail.next !== this.head) {
                tail = tail.next; // Find the last node
            }
            if (this.head === tail) {
                this.head = null; // Single-node list becomes empty
            } else {
                tail.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        // Deleting a non-head node
        let current = this.head;
        while (current.next !== this.head && current.next.data !== value) {
            current = current.next;
        }

        if (current.next.data === value) {
            current.next = current.next.next;
        } else {
            console.log("Node not found!");
        }
    }
}

// Usage example
const cll = new CircularLinkedList();
cll.insertAtEnd(10);
cll.insertAtEnd(20);
cll.insertAtEnd(30);
cll.insertAtBeginning(5);
cll.printList(); // Output: Circular List: 5 -> 10 -> 20 -> 30 -> (back to head)
cll.deleteNode(20);
cll.printList(); // Output: Circular List: 5 -> 10 -> 30 -> (back to head)
cll.deleteNode(5);
cll.printList(); // Output: Circular List: 10 -> 30 -> (back to head)
