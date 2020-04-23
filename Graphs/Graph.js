class Graph {
    constructor() {
        this.adjencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjencyList[vertex]) {
            this.adjencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjencyList[v1].push(v2);
        this.adjencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjencyList[v1] = this.adjencyList[v1].filter(
            v => v !== v2
        );
        this.adjencyList[v2] = this.adjencyList[v2].filter(
            v => v !== v1
        );
    };
    removeVertex (v) {
        while(this.adjencyList[v].length) {
            const adjecentVertex = this.adjencyList[v].pop();
            this.removeEdge(v, adjecentVertex);
        };
        delete this.adjencyList[v];
    };
    depthFirstSearch (start) {
        const result = [];
        const visited = {};
        const adjencyList = this.adjencyList;
        (function dfs (vertex) {
            if( !vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start)
        return result;
    }
    depthFirstSearchTwo (start) {
        const visited = {};
        const result = [];
        const stack = [start];
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
    breadthSearch (start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        };
        return result
    }
}

let g = new Graph;
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('İstanbul');
g.addEdge('Tokyo', 'İstanbul');
console.log(g.breadthSearch('Tokyo'));
