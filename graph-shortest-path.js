let edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
]

const generateGraph = (edges) => {
    let graph = {};

    for ([a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}

const findShortestPathDFS = (edges, src, dest) => {
    const graph = generateGraph(edges);
    let shortestPath = [];
    for (let neighbor of graph[src]) {
        path = computePath(graph, neighbor, dest, new Set([src]), [src]);
        if (shortestPath.length == 0 || path.length < shortestPath.length) {
            shortestPath = [...path]
        }
    }
    
    return shortestPath;
}

const computePath = (graph, curr, dest, visited, path=[]) => {
    if (visited.has(curr)) return [];
    if (curr == dest) {
        console.log(path);
        return [...path];
    }
    visited.add(String(curr));
    path.push(String(curr));
    
    for (let neighbor of graph[curr]) {
        computePath(graph, neighbor, dest, visited, path);
    }
    return path;
}

const findShortestPathBFS = (edges, src, dest) => {
    const graph = generateGraph(edges);
    let q = [[src, 0]]
    let visited = new Set()
    let minPathLength = 100001

    while(q.length > 0){
        let [curr, pathLength] = q.shift();
        if (curr == dest) {
            minPathLength = Math.min(pathLength, minPathLength);
            continue
        }
        visited.add(curr);
        for (let neighbor of graph[curr]) {
            if (!visited.has(neighbor)) {
                q.push([neighbor, pathLength + 1]);
            }
            
        }
    } 
    return minPathLength;
}

let src = 'v';
let dest = 'y';

// let resDFS = findShortestPathDFS(edges, src, dest)
let res = findShortestPathBFS(edges, src, dest)
console.log("shortestPath", res);