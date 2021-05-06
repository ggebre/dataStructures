// Breadth First Search---BFS--EVERY SIBLING IS SEARCHED BEFORE GOING TO THE CHILDREN
    // Create a queue and a variable to store the values of the nodes visisited
    // place the root node in the queue 
    // Loop as long as there is anything in the queue
        // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
        // if there is left property on the node dequeued - add it to the queue 
        // if there is right property on the node dequeued - add it to the queue 
    // Return the variable that stores the values 

function BFS(tree){
    let node = tree.root, 
            queue = [], 
            visited = []
        
        queue.push(tree.root)
        while(queue.length){
            node = queue.shift()    //take the first element of the queue 
            visited.push(node.value)
            // check if the node has left and/or right, and push them to the queue 
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        } 
        return visited 
}


// Depth First Search---DFS
// Starts at root and go to child = child => child ....Depth first then to 