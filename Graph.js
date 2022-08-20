class Graph{
    constructor(){
        this.adjacencyList = [];
    }

    addVertex(vertex1){
        if(!this.adjacencyList[vertex1])
        this.adjacencyList[vertex1] = [];


    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }


    removeEdge (v1,v2){
       this.adjacencyList[v1]= this.adjacencyList[v1].filter(v=> v !== v2);
       this.adjacencyList[v2]= this.adjacencyList[v2].filter(v=> v !== v1);
    }

    removeVertex (v){
        while (this.adjacencyList[v].length)
        {
            const adjacentVertex = this.adjacencyList[v].pop();
            g.removeEdge(v,adjacentVertex);
        }
        delete this.adjacencyList[v];
        
    }
    
    DFSrecursive (start){
        var result = [];
        var visited ={};
        const adjacencyList = this.adjacencyList;


        (function dfs(vertex){
            if (!vertex) return null;
            visited[vertex]= true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }});
            

        })(start);

        return result;
    
    }

    DFSiterative (start){
        var stack = [start];
        var result = [];
        var visited ={};
        let currentVertex;

        visited[start] = true;

        while (stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor =>{
                if (!visited[neighbor]){
                    visited[neighbor]= true;
                    stack.push(neighbor);
                }
            });
            
        };
        return result;

    }

    BFS (vertex){
        var queue = [vertex];
        var visited = {};
        var result= [];
        let currentVertex;
         visited[vertex]=true;
      

        while (queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]){
                    visited[neighbor]= true;
                    queue.push(neighbor);
                }
            });
        }

        return result;


    }
    

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.DFSrecursive("A"));
console.log (g.BFS("A"));


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F








