class Node {
    constructor(data){
        this.data = data 
        this.next = null 
        this.prev = null 
    }
} 
class doublyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    } 
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = this.head 
        }else{
            this.tail.next = node 
            node.prev = this.tail 
            this.tail = node 
        }
        this.length++
        return this 
    }
    pop(){
        if(this.length <= 1){
            this.head = null 
            this.tail = null 
            this.length = 0
        } else {
            let tail = this.tail 
            let prev = tail.prev 
            prev.next = null 
            this.tail = prev 
            this.length--
        }
        return this 
    } 
    shift() {
        if(this.length <= 1){
            this.head = null 
            this.tail = null 
            this.length = 0
        } else {
            let head = this.head
            let next = head.next
           
            next.prev = null 
            this.head = next 

            this.length--
        }
        return this
    }
    unshift(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node 
            this.tail = node
            
        } else {
            let currentHead = this.head
            currentHead.prev = node 
            node.next = currentHead
            this.head = node
        }
        this.length++
        return this 
    }
    get(index){
        if(index > this.length || index < 0) return null 
        let counter, foundNode 
        if(index < this.length / 2) {
            counter = 0
            foundNode = this.head 
            while (counter < index){
                foundNode = foundNode.next 
                counter++
            }
        } else {
            counter = this.length - 1
            foundNode = this.tail 
            while (counter != index){
                foundNode = foundNode.prev 
                counter--
            }
        }
        return foundNode 
        
    }
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.data = val 
            return true 
        }
        return false 
        
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false 
        if(index === 0) return !!this.unshift(val)
        if(index === this.length - 1) return !!this.push(val)
        let node = new Node(val) 
        let currentNode = this.get(index)
        let previousNode = currentNode.prev 
        node.prev = previousNode 
        node.next = currentNode 
        previousNode.next = node 
        currentNode.prev = node 
        
        this.length++
        return true 
    }
    remove(index){
        if(index < 0 || index > this.length) return false 
        if(index === 0) return !!this.shift()
        if(index === this.length - 1) return !!this.pop()
        let nodeTobeRemoved = this.get(index)
        let previousNode = nodeTobeRemoved.prev 
        let nextNode = nodeTobeRemoved.next 
        previousNode.next = nextNode 
        nextNode.prev = previousNode 
        nodeTobeRemoved.prev = null 
        nodeTobeRemoved.next = null
        this.length--
        return nodeTobeRemoved 
    }
    
}

let double = new doublyLinkedList()
double.push("HELLO") 
double.push("SELAM")
double.push("HOLA!!!!")
double.push("GOODMOrning")
double.push("GoodAfternoon")
double.push("Godmorgen")

// console.log(double.get(1))
// console.log(double.get(4))
console.log(double.remove(2))
console.log(double.get(1))
console.log(double.get(2))
console.log(double.get(3))
console.log(double.get(4))

// double.reverse()
//  console.log(double)
// console.log(double.get(1))
// console.log(double.get(2))