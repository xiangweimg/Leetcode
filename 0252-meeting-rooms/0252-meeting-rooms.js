/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let meetings = []
    let stack = []
    for(let i = 0; i < intervals.length; i++){
        let curr = intervals[i]
        meetings.push({time:curr[0], status:'start', index:i})
        meetings.push({time:curr[1], status:'end', index:i})
    }
    let sorted = meetings.sort((a,b) => {
        if(a.time === b.time){
             return a.status.length - b.status.length
        }else{
            return a.time - b.time
        }
    }) 
    
    for(let sort of sorted){
        let lastI = stack[stack.length - 1]
        if(sort.index === lastI ){
            stack.pop()
        }else if(stack.length > 0){
            return false
        }else{
            stack.push(sort.index)
        }
    }
    return true
};