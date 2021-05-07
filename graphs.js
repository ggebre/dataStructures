// graph consists of a finite set of vertices or nodes or points,
// adjacency matrix and list 
// undirected vs directed graph, weighted vs unweighted graph 
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1].push(vertex2)
        }else{
            this.addVertex(vertex1)
            this.adjacencyList[vertex1].push(vertex2)
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2].push(vertex1)
        }else{
            this.addVertex(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
    removeEdge(vertex1, vertex2){
        
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
    removeVertex(vertex){
        this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v) )
        delete this.adjacencyList[vertex] 
    }
}
let graph = new Graph()
graph.addVertex("Chicago")
graph.addVertex("LA")
graph.addVertex("Colorado")
graph.addVertex("Indiana")

graph.addEdge("Chicago", "Colorado")
graph.addEdge("Chicago", "Indiana")
graph.addEdge("Chicago", "LA")
graph.addEdge("LA", "Colorado")
graph.addEdge("LA", "Indiana")

console.log(graph.adjacencyList["Chicago"])
console.log(graph.adjacencyList["LA"])
graph.removeVertex("Chicago")
console.log(graph.adjacencyList["Chicago"])
console.log(graph.adjacencyList["LA"])


