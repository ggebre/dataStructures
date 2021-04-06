// consists of nodes 

class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let node = new Node(val) 
        if (!this.head){
            this.head = node 
            this.tail = this.head 
        } else {
            this.tail.next = node 
            this.tail = node 
        }
        this.length += 1
        return this
    }
    pop(){
        if(!this.head) return 
        
        let current = this.head 
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current 

    }
    shift(){
        // remove the head and return it 
        if (!this.head) return 
        let current = this.head 
        this.head = current.next
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current 
    }
    unshift(val){
        // adds node to the beginning of the list 
        let newHead = new Node(val)
        if (!this.head){
            this.head = newHead 
            this.tail = newHead
        } else {
            newHead.next = this.head 
            this.head = newHead 
        }
        this.length++
        return this
    }
    get(index){
        if(index >= this.length || index < 0) return null
        let counter = 0 
        let currentNode = this.head
        while(counter < index){
            currentNode = currentNode.next 
            counter++
        }
        return currentNode
    } 
    set(index, val){
        let current = this.get(index)
        if(current){
            current.data = val 
            return true 
        }
        return false
    }
    insert(index, val){
        let node = new Node(val)
        if(index > this.length || index < 0) return false 
        
        if(index === 0) return !!this.unshift(val)
       
        let previousNode = this.get(index - 1) 
        let tempNode = previousNode.next
        previousNode.next = node 
        node.next = tempNode
        this.length++ 
        return true   
    }
    remove(index){
        if(index > this.length || index < 0) return 
        if(index === 0) return this.shift() 
        if(index === this.length - 1) return this.pop() 
        let previous = this.get(index - 1) 
        let nodeToBeRemoved = previous.next 
        let nextNode = nodeToBeRemoved.next 
        previous.next = nextNode 
        this.length--
        return nodeToBeRemoved  
    }
    reverse(){
        let node = this.head 
        this.head = this.tail 
        this.tail = node 

        let prev = null 
        let next 
        for(let i = 0; i < this.length;i++){
            next = node.next 
            node.next = prev 

            prev = node 
            node = next 
        }
        return this 
    }
}

let list = new SinglyLinkedList()
list.push('hi')
list.push('shalom')
list.push('cao')
list.unshift('GOOD MORNING')
// console.log(list.get(3))
list.reverse()
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
// console.log(list.get(1))
// console.log(list.get(2))
// console.log(list.get(3))


