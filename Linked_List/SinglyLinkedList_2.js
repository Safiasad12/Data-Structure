class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LL{
    constructor(data){
        this.head=null;
        this.size=0;
    }
    add(data){
        const node = new Node(data);
        if(this.head===null){
            this.head=node;
        }
        else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.size++;
    }
    display(){
        let curr=this.head;
        let result = "";
        while(curr){
            if(curr.next){
                 result += curr.data +" -> ";
            }
            else{
                 result += curr.data
            }
            curr=curr.next;
        }
        console.log(result);
    }
    addAtFirst(data){
        let node=new Node(data);
        node.next=this.head;
        this.head=node;
        this.size++;
    }
    addAtIndex(data, index){
        if(index<0 || index>this.size-1){
            return "Invalid Index";
        }
        else{
            const node =new Node(data);
            let curr = this.head;
            let i=0;
            while(i<index){
                i++;
                if(i<index){
                    curr=curr.next;
                }
            }
            node.next=curr.next;
            curr.next=node;
        }
    }
    deleteAtEnd(){
        let curr=this.head;
        while(curr.next.next){
            curr=curr.next;
        }
        curr.next=null;
    }
    deleteAtFirst(){
        this.head=this.head.next;
    }
    deleteAtIndex(index){
        if(index<0 || index>this.size-1){
            return "Invalid Index";
        }
        else{
            let curr=this.head;
            let i=0;
            while(i<index){
                i++;
                if(i===index){
                    continue;
                }
                else{
                    curr=curr.next;
                }
            }
            curr.next=curr.next.next;
        }
    }
}

let list = new LL();
list.add(34);
list.add(23);
list.add(45);
list.addAtFirst(11);
list.addAtIndex(78, 1);
list.display();
list.deleteAtEnd();
list.display();
list.deleteAtFirst();
list.display();
list.deleteAtIndex(1);
list.display();



