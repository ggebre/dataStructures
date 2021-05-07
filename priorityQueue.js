// priority queue is a data structure where each element is associated 
// with priority. Elements with high priority are fetched first than element
// with a lower priority 
// priority 1 is the highest priority than the rest...
// min heap datastructure 
class PriorityQueue {
    constructor(){
        this.values = []
    }
    enqueue(value, priority){
        let node = new Node(value, priority)
        this.values.push(node)
        this.bubbleUp()
        return this 
    }
    bubbleUp(){
        // finds the parent of the last element and swap them if last element is greater than its parent element
        // parent at n-index has left child at 2*n + 1 and right child at 2*n + 2 
        // heap modelled in an array 
        // to find the parent index, we use Math.floor((indexChild - 1) / 2)
        let idx = this.values.length - 1
        let element = this.values[idx]
        while(idx > 0){
            
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx] 
            if( element.priority >= parent.priority) break; 
            this.values[parentIdx] = element 
            this.values[idx] = parent 
            idx = parentIdx
        }

    }
    dequeue(){
        // swap last and first element 
        let min = this.values[0]
        let end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end 
            this.bubbleDown()
        }
        
        return min
    }
    bubbleDown(){
        let idx = 0
        const length = this.values.length
        let element = this.values[idx]

        while(true){
            
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild

            let swap = null 
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                
                if(leftChild.priority < element.priority){
                    
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                    ){
                        
                        swap = rightChildIdx
                    }
            }
            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element 
            
            idx = swap 
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val 
        this.priority = priority
    }
}

let priority = new PriorityQueue()
priority.enqueue('Ruth', 2)
priority.enqueue('Getu', 1)
priority.enqueue('Get', 3)
priority.enqueue('Sami', 8)
priority.enqueue('GG', 6)
priority.enqueue('EG', 5)
priority.enqueue('SG', 4)
priority.enqueue('Eskedar', 7)
