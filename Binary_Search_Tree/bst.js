class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
           if(node.left === null){
               node.left = newNode;
           }
           else{
               this.insertNode(node.left, newNode);
           }
        }
        else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    
    removeNode(node, key){
        if(node === null){
            return null;
        }
        if(key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }
    
        else if(key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        }
        
        else{
            
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
            node=node.right;
            return node;
            }
            else if(node.right === null){
                node=node.left;
                return node;
            }
            let min= this.findMinNode(node.right);
            node.data= min.data;
            node.right=this.removeNode(node.right, min.data);
            return node;
        }
    }
    
    findMinNode(node){
        while(node.left !== null){
            node = node.left;
        }
        return node;
    }
    
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    
    preOrder(root = this.root){
        if(root){
            console.log(root.data);
            this.inOrder(root.left);
            this.inOrder(root.right);    
        }
    }
    
    postOrder(root = this.root){
        if(root){
            this.inOrder(root.left);
            this.inOrder(root.right);
            console.log(root.data);
        }
    }
}


let bst = new BST();
bst.insert(34);
bst.insert(75);
bst.insert(44);
bst.remove(75);

bst.inOrder();
console.log("------------");
bst.preOrder();
console.log("------------");
bst.postOrder();





