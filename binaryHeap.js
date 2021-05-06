// heap is a tree structure 
// maxBinaryHeap --- parent nodes are higher than the children but there is no order of the children 
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
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx] 
            if( element <= parent) break 
            this.values[parentIdx] = element 
            this.values[idx] = parent 
            idx = parentIdx
        }
    }
}

let heap = new Heap()
heap.insert(100)
heap.insert(50)
heap.insert(99)
heap.insert(23)
heap.insert(49)
heap.insert(88)

console.log(heap)
