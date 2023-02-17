/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let population = {}
    let max = 0
    let maxY = Infinity
    for(let person of logs){
        for(let i = person[0]; i < person[1]; i++){
            population[i] ? population[i]++ : population[i] = 1
            if(population[i] > max){ 
                max = population[i]
                maxY = i
            }else if(population[i] === max){
                maxY = Math.min(maxY, i)
            }
        }
    }
    return maxY
};