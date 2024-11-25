class Stack{
    constructor(){
        this.stack=[];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.stack[this.size()-1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack();
stack.push(4);
stack.push(6);
stack.push(3);
stack.push(9);

console.log(stack);

console.log(`peek : ${stack.peek()}`);
console.log(`pop : ${stack.pop()}`);
console.log(`peek : ${stack.peek()}`);
console.log(`pop : ${stack.pop()}`);
console.log(`size : ${stack.size()}`);
console.log(`isEmpty : ${stack.isEmpty()}`);
console.log(`pop : ${stack.pop()}`);
console.log(`peek : ${stack.peek()}`);
console.log(`pop : ${stack.pop()}`);
console.log(`isEmpty : ${stack.isEmpty()}`);
console.log(`pop : ${stack.pop()}`);
    