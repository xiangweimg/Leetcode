/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    // this.grid = new Array(height).fill().map((ele) => new Array(width))    
    this.snake = [0,0]
    this.food= food
    this.body = ['0,0']
    this.score = 0;
    this.width = width- 1
    this.height = height - 1
};

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    //eat food then place new food
    //increase length of snake
    let move ={
        'R':[0,1],
        'L':[0,-1],
        'U':[-1,0],
        'D':[1,0],
    }
    this.snake = [this.snake[0]+ move[direction][0], this.snake[1]+move[direction][1]]
    if(this.snake[0] > this.height || this.snake[1] > this.width || this.snake[0] < 0 || this.snake[1] < 0) return -1;

    if(this.food.length && this.snake.join(',') === this.food[0].join(',')){
        this.food.shift(this.food[0])
        this.score++
    }
    
    if(this.body.length > this.score){ //2, 1
        this.body.shift()
    }
    //check if bite itself, this.body includes? this.snake?
    // console.log(this.body, this.snake)
    if(this.body.includes(this.snake.join(','))) return -1;
    this.body.push(this.snake.join(','))//2
    return this.score
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */