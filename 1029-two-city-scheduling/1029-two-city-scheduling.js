/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0])); //a = [10,20] b = [30,200]
    let sum=0; 
    let n=costs.length/2;
    for(let i=0; i<n; i++){
       sum+=costs[i][0]+costs[n+i][1];
    }
    return sum;
};