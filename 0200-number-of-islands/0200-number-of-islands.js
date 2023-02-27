/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const visited = new Set()
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(explore(grid, r, c, visited) === true){
                count += 1
            }
        }
    }
    return count
};
const explore = (grid, r, c, visited) =>{
    const rowIn = r >= 0 && r < grid.length;
    const colIn = c >= 0 && c < grid[0].length;
    if(!rowIn || !colIn) return false;
    if(grid[r][c] === '0') return false;
    
    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);
    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);
    return true
}