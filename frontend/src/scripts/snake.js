export default class InitGame {
    constructor(ref, size, step) {
        this.ref = ref;
        this.size = size;
        this.step = step;
      }
    apples = [];
    count = 0;
    snake = [
        {
            x: 0,
            y: 0,
        },
    ];
    CreateArea(){
        this.ref.width = (this.size * this.step);
        this.ref.height = this.ref.width;
    }

    CreateFood(){
        const ctx = this.ref.getContext("2d");
        const apple = { x: 0, y: 0 };
        apple.x = Math.floor(Math.random() * this.size) * this.step;
        apple.y = Math.floor(Math.random() * this.size) * this.step;
        this.apples.push(apple);
        
        ctx.fillStyle = "#DF6149";
        ctx.fillRect(apple.x + 2, apple.y + 2, this.step-4, this.step-4);
        
    }
    
    InitSnake(){
        const ctx = this.ref.getContext("2d");
            ctx.clearRect(0, 0, this.ref.width, this.ref.height);
   

            this.apples.forEach((apple) => {
                ctx.fillStyle = "#DF6149";
                ctx.fillRect(apple.x + 2, apple.y + 2, this.step-4, this.step-4);
    });
            for(let i = 0; i < this.snake.length; i++){
                    if(this.snake[0].x >= this.ref.width){
                        this.snake[0].x = 0; 
                    }
                    if(this.snake[0].x < 0){
                        this.snake[0].x = this.ref.width-this.step;
                    }
                    if(this.snake[0].y >= this.ref.height){
                        this.snake[0].y = 0; 
                    }
                   if(this.snake[0].y < 0){
                        this.snake[0].y = this.ref.height-this.step;
                    }
                ctx.fillStyle = "#79fc65";
                ctx.fillRect(this.snake[i].x, this.snake[i].y, this.step, this.step);
                ctx.fillStyle = "#3b8743";
                ctx.fillRect(this.snake[0].x, this.snake[0].y, this.step, this.step);
            }
            
        
    }
    SnakeMove(direction){

            const head = {x: this.snake[0].x, y: this.snake[0].y};
            if(direction == 'down'){
                head.y += this.step;
    
            }
            if(direction == 'right'){
                head.x += this.step;
        
            }
            if(direction == 'up'){
                head.y -= this.step;

            }
            if(direction == 'left'){
                head.x -= this.step;
    
            }
            
                for(let i = 0; i < this.apples.length; i++){
                    if(this.snake[0].x == this.apples[i].x && this.snake[0].y == this.apples[i].y){
                        this.count++
                        this.apples.splice(i, 1)
                        this.snake.unshift(head)
                        return
                    }
 
                }
                this.snake.unshift(head)
                this.snake.pop();
                
             
            }

            
        ResetGame(){
            if(this.snake.length >= 3){
                for(let i = 1; i < this.snake.length; i++){
                    if(this.snake[0].x == this.snake[i].x && this.snake[0].y == this.snake[i].y){
                        return true;
                    }
                }
            }
            
        }
    }
        








