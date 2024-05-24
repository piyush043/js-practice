const graph = {
    0: [1,5,8],
    1: [0],
    2: [4,3],
    3: [2,4],
    4: [2,3],
    5: [0],
    6: [],
    7: [],
    8: [0]
}

const findLargestComponent = (graph) => {
    let visited = new Set()
    let maxCount = 0;
    for (let node in graph) {
        let count = explore(graph, String(node), visited);
        maxCount = Math.max(maxCount, count);
        console.log(node, count)
    }
    return maxCount
}

const explore = (graph, node, visited) => {
    if (visited.has(node)) {return 0;}
    
    visited.add(String(node));
    let size = 1
    for (let neighbor of graph[node]) {
        size += explore(graph, String(neighbor), visited);
    }
    
    return size
}

console.log(findLargestComponent(graph));