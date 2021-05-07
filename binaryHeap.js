// heap is a tree structure 
// maxBinaryHeap --- parent nodes are higher in value than the children but there is no order of the children 
// minBinaryHeap --- parent nodes are lower than the children but there is no order of the children 
class Heap {
    constructor(){
        this.values = []
    }
    insert(value){
        this.values.push(value)
        this.bubbleUp()
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
            if( element <= parent) break; 
            this.values[parentIdx] = element 
            this.values[idx] = parent 
            idx = parentIdx
        }
    }
    extractMax(){
        // swap last and first element 
        let max = this.values[0]
        let end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end 
            this.bubbleDown()
        }
        
        return max
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
                
                if(leftChild > element){
                    
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new Heap()


heap.insert(100)
heap.insert(60)
heap.insert(50)
heap.insert(80)
heap.insert(23)

heap.insert(3)

heap.insert(13)

heap.insert(20)

heap.insert(49)

heap.insert(99)
heap.insert(99)

console.log(heap.values)
// [99, 80, 50, 60, 23, 3, 13, 20, 49]
// console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap)
// console.log(heap.extractMax())
// console.log(heap)
// console.log(heap.extractMax())




