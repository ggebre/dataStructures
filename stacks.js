// datastructure LIFO-Last In First Out...collection 
// there are different ways of implementation of stacks 

// Array Implementation  

// class Stack {
//     constructor(){
//         this.stack = []
//     } 
//     push(val){
//         this.stack.push(val)
//         return this.stack.length
//     }
//     pop(){
//         this.stack.pop()
//         return this.stack.length
//     }
// } 

class Stack {
    constructor(){
        this.first = null 
        this.last = null 
        this.length = 0
    } 
    push(value){
        // add to the beginning of the stack
        let node = new Node(value) 
        if(!this.length){
            this.first = node 
            this.last = node  
        }else{
            let temp = this.first 
            this.first = node 
            node.next = temp 
            
        }
        return ++this.length
    }
    pop(){
        // removes a node from the beginning of the node 
        if(!this.length) return null

        let node = this.first 
        
        if(this.first === this.last){
            this.last = null 
        }
        this.first = node.next 
        this.length--
        return node.value
    }
}
class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}

// let stack = new Stack() 
// console.log(stack.push("First"))
// console.log(stack.push("Second"))
// console.log(stack.push("Third"))

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.push("Third"))
let stack = new Stack()
let str = "HELLO GETU GEBRE!"
let reversed = ""
for(let char of str){
    stack.push(char)
}
for(let char in str){
    reversed += stack.pop()
} 
console.log(reversed)