class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addAtEnd(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    display() {
        let curr = this.head;
        let res = "";
        while (curr) {
            if(curr.next){
                res += curr.data + " <-> ";
            }
            else{
                res += curr.data;
            }
            curr = curr.next;
        }
        console.log(res);
    }

    addAtFirst(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    addAtIndex(data, index) {
        if (index < 0 || index > this.size - 1) {
            console.log("Invalid Index");
        }
        else if (index === 0) {
            const node = new Node(data);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.size++;
        }
        else {
            const node = new Node(data);
            let curr = this.head;
            let i = 0;
            while (i < index) {
                i++;
                if (i === index) {
                    continue;
                }
                else {
                    curr = curr.next;
                }
            }
            node.next = curr.next;
            curr.next.prev = node;
            node.prev = curr;
            curr.next = node;
            this.size++;
        }
    }

    displayRev() {
        if (!this.isEmpty()) {
            let curr = this.tail;
            let res = "";
            while (curr !== null) {
                if(curr.prev){
                    res += curr.data + " <-> ";
                }
                else{
                    res += curr.data;
                }
                curr = curr.prev;
            }
            console.log(res);
        }
    }
}

let dll = new DLL();
dll.addAtEnd(23);
dll.addAtEnd(45);
dll.addAtFirst(51);
dll.addAtFirst(76);
dll.display();
dll.addAtIndex(11, 3);
dll.display();
dll.displayRev();
