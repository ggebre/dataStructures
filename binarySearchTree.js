// Every elemnt to the left of the root is less than the root
// Every element to the right is greater
// every parent has maximum of two children 

class BinarySearchTree {
    constructor(){
        this.root = null 
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node 
            return this 
        } 
        let parent = this.root 
        while(!!parent){
            if(parent.value < value){
                if(!parent.right){
                    parent.right = node 
                    return this 
                }else{
                    parent = parent.right 
                }
               
            }else if(parent.value > value){
                if(!parent.left){
                    parent.left = node 
                    return this 
                } else {
                    parent = parent.left 
                }
            } else {
                return undefined
            }
        }
    }
    find(value){
        if(!this.root) return false 
        let parent = this.root 
        // while(!!parent){
        //     if(parent.value < value){
        //         if(!!parent.right && parent.right.value === value){
        //             return true 
        //         }else{
        //             parent = parent.right 
        //         }
               
        //     }else {
        //         if(!!parent.left && parent.left.value === value){
        //             return true  
        //         } else {
        //             parent = parent.left 
        //         }
        //     } 
        // }
        // return false 
        let current = this.root,
            found = false 
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true 
            }
        } 
        if(!found) return undefined 
        return current 
    }
    // Breadth First Search-BFS
    BFS(){
        // 1. create a variable to store the values of nodes visited
        // 2. store the root of the BST in a variable called current 
        // 3. create a queue to temporarily hold the the current node 
        // 4. push current to the queue
        // 5. while the length of the queue is greater than zero do 
            // assign current the first element of queue ---dequeue---shift in the array
            // push the current data to visited
            // check if the node has left property, if it does push that to the queue
            // check if the node has right property, if it does push that to the queue
        // Return visited 
        // collects all elements along same line before it goes to the children... 
        let current = this.root, 
            queue = [], 
            visited = []
        
        queue.push(this.root)
        while(queue.length){
            current = queue.shift()
            visited.push(current.value)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        } 
        return visited 
    }
    // Depth First Search- DFS--PREORDER
    DFSPreOrder(){
        // 1. create a variable to store the values of nodes visited
        // 2. store the root of the BST in a variable called current 
        // 3. write a helper function which accepts a node 
            // a. Push the value of the node to the variable that stores the values 
            // b. if the node has a left property, call the helper function with the left property on the node 
            // c. if the node has a right property, call the helper function with the right property on the node 
            // d. invoke the helper function with the current variable 
        // Return the array of values 
        let current = this.root, 
            visited = []
            function traverse(node){
                visited.push(node.value)
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)    
            }
        traverse(current)
        return visited
    } 
    // Depth First Search -- DFS--POSTORDER---the root is visited is last while the children are visited
    DFSPostOrder(){
        // 1. create a variable to store the values of nodes visited
        // 2. store the root of the BST in a variable called current 
        // 3. write a helper function which accepts a node 
            // a. if the node has a left property, call the helper function with the left property on the node 
            // b. if the node has a right property, call the helper function with the right property on the node 
            // c. Push the value of the node to the variable that stores the values 
        // invoke the helper function with the current variable 
        // Return the array of values 

        let current = this.root, 
            visited = []
            function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right) 
                visited.push(node.value)

            }
        traverse(current)
        return visited
    }
    DFSInOrder(){
        // 1. create a variable to store the values of nodes visited
        // 2. store the root of the BST in a variable called current 
        // 3. write a helper function which accepts a node 
            // a. if the node has a left property, call the helper function with the left property on the node 
            // b. Push the value of the node to the variable that stores the values 
            // c. if the node has a right property, call the helper function with the right property on the node 
        // invoke the helper function with the current variable 
        // Return the array of values  
        let current = this.root, 
            visited = []
            function traverse(node){
                if(node.left) traverse(node.left)
                visited.push(node.value)
                if(node.right) traverse(node.right) 
            }
        traverse(current)
        return visited 

    }
}
class Node {
    constructor(value){
        this.value = value 
        this.left = null 
        this.right = null 
    }
}
let bts = new BinarySearchTree()
bts.insert(20)
bts.insert(25)
bts.insert(10)
bts.insert(35)
bts.insert(21)
bts.insert(5)
console.log(bts.DFSPreOrder())
console.log(bts.BFS())
console.log(bts.DFSPostOrder())
console.log(bts.DFSInOrder())




