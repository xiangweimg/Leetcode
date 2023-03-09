/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   if(this.cache.has(key)){
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value)
        return value
   }else{
        return -1
   }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
    }

    if(this.cache.size >= this.capacity){
        let ele = this.cache.keys().next().value
        this.cache.delete(ele)
    }
    this.cache.set(key,value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */