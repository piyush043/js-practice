let graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

let bfs = (graph, start) => { 
    let q = [start];
    while (q.length > 0) {
        let curr = q.shift();
        console.log(curr);
        for (let neighbor of graph[curr]) {
            q.push(neighbor);
        }
    }

}

let dfs = (graph, start) => {
    let stack = [start];
    while (stack.length > 0) {
        let curr = stack.pop();
        console.log(curr);
        for (let neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }
}

let recurse_dfs = (graph, curr) => {
    if (!curr) {
        return
    }
    console.log(curr);
    for (let neighbor of graph[curr]) {
        recurse(graph, neighbor);
    }
}


// dfs(graph, 'a')
// recurse_dfs(graph, 'a')
bfs(graph, 'a')
