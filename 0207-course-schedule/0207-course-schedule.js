/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {//[class, pre]

    //[[class depends on this index]]
    const classByIndex = new Array(numCourses).fill(0).map(() => [])
    //class at this index depends on other class(numbers)
    const node = new Array(numCourses).fill(0)

    for(let pair of prerequisites){
        let pre= pair[1]
        let course = pair[0]
        classByIndex[pre].push(course)
        node[course]++
    }

    const stack = []; //push all the index with 0 from node 

    for (let i = 0; i < node.length; i++) {
       if (node[i] === 0) {//i is also the class#
           stack.push(i);
       }
    }
    let count = 0;
    while(stack.length){
        let index= stack.pop()
        count+=1
        let current = classByIndex[index]// [1,2,3] depend on this index
        for(let i = 0; i < current.length; i++){
            const next = current[i]//class#
            node[next]--//class next depends on 
            if(node[next] === 0){
                stack.push(next)
            }
        }
    }
    return count === numCourses
};