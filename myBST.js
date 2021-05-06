class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null 
    }
}
class BST {
    constructor(){
        this.root = null 
    }
    insert(val){
        let node = new Node(val)
        let root = this.root 
        if(!root) {
            this.root = node 
            return this 
        }
            // check if the root value is less or greater than val 
            while(root){
                if(root.value < val){
                    if(!root.right){
                        root.right = node 
                        return this
                    }
                    root = root.right 
                }else if(root.value > val){
                    if(!root.left){
                        root.left = node 
                        return this
                    }
                    root = root.left 
                }else{
                    return undefined
                }
            }

            
        }
    find(val){
        let root = this.root 
        if(!root){
            return undefined 
        }
        let parent = this.root 
        while(parent){
            if(parent.value > val){
                parent = parent.left 
            }else if(parent.value < val){
                parent = parent.right 
            } else {
                return parent 
            }
        }
        return undefined
    }
    DFSPostOrder(){
        let current = this.root,
            data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data 
    }
}
let bst = new BST()
//                  20 
//         10                   30
//    5          15
// 2      7
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(15)
bst.insert(5)
bst.insert(2)
bst.insert(7)
console.log(bst.DFSPostOrder())