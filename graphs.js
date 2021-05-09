// graph consists of a finite set of vertices or nodes or points,
// adjacency matrix and list 
// undirected vs directed graph, weighted vs unweighted graph 
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex]) return 
        this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return 
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return 
        this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v) )
        delete this.adjacencyList[vertex] 
    }

    DFSRecursive(vertex){
        //  The function should accept a starting node 
        //  Create a list to store the end result, to be returned at the very end 
        //  Create an object to store visited vertices 
        // Create a helper function which accepts a vertex 
            //  The helper function should return early if the vertex is empty
            //  The helper function should place the vertex it accepts into the visited
            //  object and push that vertex into the result array 
            //  Loop over all of the values in the adjacencyList for that vertex 
            //  if any of those values have not been visited, recursively invoke the helper
            //  function with that vertex 
        // invoke the helper function with the starting vertex
        // return the result list 
        
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null 
            visited[vertex] = true 
            result.push(vertex)
            adjacencyList[vertex].forEach(v => {
                if(!visited[v]){
                    dfs(v)
                }
            })
        })(vertex)
        
        // function dfs(vertex){
        //     if(!vertex) return null 
        //     visited[vertex] = true 
        //     result.push(vertex)
        //     adjacencyList[vertex].forEach(v => {
        //         if(!visited[v]){
        //             dfs(v)
        //         }
        //     })
        // }
        // dfs(vertex)
        return result 
    }
    DFSIterative(start){
        // The function should accept a starting node 
        // Create a stack to help use keep track of vertices(use a list/array)
        // create a list to store the end result, to be returned at the very end 
        // create an object to store visited vertices 
        // add the starting vertex to the stack, and mark it visited
        // while the stack has something in it
        //      pop the next vertex from the stack 
        //      if that vertex hasn't been visited yet:
        //          mark it as visited 
        //          add it to the result list 
        //          push all of its neighbors into the stack 
        // return result 
        const stack = [start]
        const result = []
        const visited = {}
        let vertex
        visited[start] = true 
        while(stack.length){
            vertex = stack.pop()
            result.push(vertex)
           
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true 
                    stack.push(neighbor)
                }
            })

        }
        return result  
    }
}
let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")


console.log(graph.adjacencyList["A"])
 
console.log(graph.DFSRecursive("A"))
console.log(graph.DFSIterative("A"))




