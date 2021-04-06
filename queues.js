// first In First Out 

class Queue {
    constructor(){
        this.first = null 
        this.last = null 
        this.size = 0
    }
    enqueue(value){
        // add to last 
        let node = new Node(value)
        if(!this.first){
            this.first = node 
            this.last = node 
        }else{
            this.last.next = node 
            this.last = node
        }
        return ++this.size
    }
    dequeue(){
        // removes from the beginning 
        if(!this.first) return null 
        let temp = this.first 
        if(this.first === this.last){
            this.first = null 
            this.last = null
        }
        this.first = temp.next 
        this.size--
        return temp.value 
    }
}

class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}

let queue = new Queue()
console.log(queue.enqueue("Getu"))
console.log(queue.enqueue("Samule"))
console.log(queue.enqueue("Ruth"))
console.log(queue.enqueue("ESkedar"))
// console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.size)
