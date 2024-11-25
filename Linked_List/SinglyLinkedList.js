class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    display() {
        if (this.head === null) {
            return "list is empty";
        }
        else {
            let curr = this.head;
            let lst = "";
            while (curr) {
                lst += curr.data + "->";
                curr = curr.next;
            }
            return lst + "null";
        }
    }

    addOnIdx(idx, ele) {

        if (idx < 0 || idx > this.size) {
            console.log("invalid index");
        }
        else if (idx === 0) {
            const newNode = new Node(ele);
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }
        else {
            const newNode = new Node(ele);
            let prev;
            let curr = this.head;
            let i = 0;
            while (i < idx) {
                i++;
                prev = curr;
                curr = curr.next;
            }
            newNode.next = curr;
            prev.next = newNode;
            this.size++;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index");
        }
        else {
            let prev;
            let curr = this.head;
            let i = 0;
            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
    }

    deleteElement(ele) {
        let prev = null;
        let curr = this.head;
        while (curr) {
            if (curr.data === ele) {
                if (prev === null) {
                    this.head = curr.next;
                }
                else {
                    prev.next = curr.next;
                }
            }
            prev = curr
            curr = curr.next;
            this.size--;
        }
    }
}

let l1 = new LL();

l1.add(23);
l1.add(45);
l1.addOnIdx(0, 34);
console.log(l1.display());
l1.deleteAtIndex(1);
console.log(l1.display());
l1.deleteElement(45);
console.log(l1.display());