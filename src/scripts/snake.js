// export default class InitGame {



    
//     InitSnake(){
        
//             const ctx = this.ref.getContext("2d");
//             ctx.clearRect(0, 0, this.ref.width, this.ref.height);
//             console.log(`x: ${this.snake[0].x} y:${this.snake[0].y}`)

//             this.apples.forEach((apple) => {
//                 ctx.fillStyle = "#DF6149";
//                 ctx.fillRect(apple.x + 2, apple.y + 2, this.step-4, this.step-4);
//     });
//             for(let i = 0; i < this.snake.length; i++){
//                 if(this.snake[0].x >= this.ref.width){
//                     this.snake[0].x = 0; 
//                 }
//                 if(this.snake[0].x < 0){
//                     this.snake[0].x = this.ref.width-50;
//                 }
//                 if(this.snake[0].y >= this.ref.height){
//                     this.snake[0].y = 0; 
//                 }
//                if(this.snake[0].y < 0){
//                     this.snake[0].y = this.ref.height-50;

//                 }
//                 ctx.fillStyle = "#79fc65";
//                 ctx.fillRect(this.snake[i].x, this.snake[i].y, this.step, this.step);
//                 ctx.fillStyle = "#3b8743";
//                 ctx.fillRect(this.snake[0].x, this.snake[0].y, this.step, this.step);
//             }
            
        
//     }
//     SnakeMove(direction){

//             const head = {x: this.snake[0].x, y: this.snake[0].y};
//             if(direction == 'down'){
//                 head.y += this.step;
    
//             }
//             if(direction == 'right'){
//                 head.x += this.step;
        
//             }
//             if(direction == 'up'){
//                 head.y -= this.step;

//             }
//             if(direction == 'left'){
//                 head.x -= this.step;
    
//             }
            
//                 for(let i = 0; i < this.apples.length; i++){
//                     if(this.snake[0].x == this.apples[i].x && this.snake[0].y == this.apples[i].y){
//                         this.count++
//                         this.apples.splice(i, 1)
//                         this.snake.unshift(head)
//                         return
//                     }
 
//                 }
//                 this.snake.unshift(head)
//                 this.snake.pop();
                
             
//             }

            

//     }

let apples, step, size, canv, ctx, score = 0;
let snake = [ {x: 0, y:0} ];

export function Init(ref, areaSize, snakeStep, applesArr){
            ref.width = (areaSize * snakeStep);
            ref.height = ref.width;
            canv = ref;
            ctx = canv.getContext('2d');
            apples = applesArr;
            size = areaSize;
            step = snakeStep;

    }
    

export function CreateFood(){
        const apple = { x: 0, y: 0 };
        apple.x = Math.floor(Math.random() * size) * step;
        apple.y = Math.floor(Math.random() * size) * step;
        apples.push(apple);
        
        ctx.fillStyle = "#DF6149";
        ctx.fillRect(apple.x + 1, apple.y + 1, step-2, step-2);
        
    }

export function DrawSnake(){

                apples.forEach((apple) => {
                ctx.fillStyle = "#DF6149";
                ctx.fillRect(apple.x + 1, apple.y + 1, step-1, step-1);
    });

    for(let i = 0; i < snake.length; i++){
        if(snake[0].x >= canv.width){
            snake[0].x = 0; 
        }
        if(snake[0].x < 0){
            snake[0].x = canv.width-step;
        }
        if(snake[0].y >= canv.height){
            snake[0].y = 0; 
        }
        if(snake[0].y < 0){
            snake[0].y = canv.height-step;

        }
        ctx.fillStyle = "#79fc65";
        ctx.fillRect(snake[i].x, snake[i].y, step, step);
        ctx.fillStyle = "#3b8743";
        ctx.fillRect(snake[0].x, snake[0].y, step, step);
    }    
} 

export function SnakeMove(direction, count){
    const head = {x: snake[0].x, y: snake[0].y};
            if(direction == 'down'){
                head.y += step;
    
            }
            if(direction == 'right'){
                head.x += step;
            }
            if(direction == 'up'){
                head.y -= step;

            }
            if(direction == 'left'){
                head.x -= step;
            }
            
                for(let i = 0; i < apples.length; i++){
                    if(snake[0].x == apples[i].x && snake[0].y == apples[i].y){
                        drawScore(true);
                        apples.splice(i, 1)
                        snake.unshift(head)
                        return
                    }
 
                }
                snake.unshift(head)
                snake.pop();
}

export function drawScore(isEat){
    if(isEat){
        return score++;
    }
    return score
}

export function ClearArea(){
    ctx.clearRect(0, 0, canv.width, canv.height);
}

export function ResetGame(){
        for(let i = 1; i < this.snake.length; i++){
            if(this.snake[0].x == this.snake[i].x && this.snake[0].y == this.snake[i].y){
                return true;
            }
        }
}

// export function Loop(state, fn){ 
//     let raf = '';   
//     if(state){
//         raf = requestAnimationFrame(fn)
//     }
//     else{
//         cancelAnimationFrame(raf)
//     }
// }

