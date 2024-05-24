const matrix = [
    ['L', 'W','W','L','W'],
    ['L', 'W','W','W','L'],
    ['W', 'L','W','L','W'],
    ['L', 'W','W','W','W'],
    ['W', 'W','L','L','L'],
]
const islandCount = (matrix) => {
    let visited = new Set();
    let count = 0;

    for (let r=0; r<matrix.length; r++) {
        for (let c=0; c<matrix[0].length; c++) {
            if (matrix[r][c] != 'W' && !visited.has(`${r},${c}`)) {   
                findIsland(matrix, r, c, visited);
                count += 1;
            }
        }
    }

    return count;

}

const findIsland = (matrix, r, c, visited) => {
    let key = `${r},${c}`
    if (visited.has(key)) return
    if (r < 0 || c < 0) return
    if (r >= matrix.length || c >= matrix[0].length) return
    if (matrix[r][c] != 'L') return
    
    visited.add(key)

    findIsland(matrix, r + 1, c, visited)
    findIsland(matrix, r - 1, c, visited)
    findIsland(matrix, r, c + 1, visited)
    findIsland(matrix, r, c - 1, visited)
}

console.log(islandCount(matrix));