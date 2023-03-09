
var HitCounter = function() {
    //{time:hit}
    this.timesmap = {}
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.timesmap[timestamp] ? this.timesmap[timestamp]++ : this.timesmap[timestamp] = 1;
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    //[timestamp, timestamp - 300]
    let count = 0;
    let times = Object.keys(this.timesmap)
    for(let time of times){
        if(time> timestamp -300 && time <= timestamp){
            count+= this.timesmap[time]
        }
    }
    return count
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */