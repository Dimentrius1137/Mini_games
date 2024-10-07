<template> 
    <div  v-cloak class="snake">
        <Transition name="dialog_anim">
            <Popup 
            :gameState="isStart"
            :startingGame="Start">
                <label for="size">Размер арены: {{ areaSize }}</label>
                <br>
                <input type="range" v-model="areaSize" step="2" min="6" max="12">
                <br>
                <label for="size">Скорость змея: {{ speed }}</label>
                <br>
                <input type="range" v-model="speed" step="1" min="10" max="15">
            </Popup>
        </Transition>
   

    <div class="interface">
        <div class="score">Счет: {{ score }}</div>
        <button class="btn btn-success rounded-pill" @click="Restart">Рестарт</button>

        <div class="record">Рекорд: {{ CalculateRecord }}</div>
    </div>


    <div class="area">
        <Transition name="lose">
            <div class="text_lose" v-if="reset" style="color: white">Ты проиграл</div>
        </Transition>  
        <canvas width="0" height="0" id="ctx" ref="area" :class="{resetCtx: reset}"></canvas>
    </div>
    <div class="buttons" @click="Controller" v-if="isStart">
        <Controls :disable="reset"/>
    </div>
</div>
    
   
</template>

<script>
    import Controls from '@/components/Controls.vue';
    import InitGame from '@/scripts/snake';
    import Popup from '@/components/Popup.vue';
    export default{
        components:{
            Popup,
            Controls
        },  
        data(){
            return{
                areaSize: 8,
                speed: 10,
                score: 0,
                record: 0,
                isStart: false,
                reset: false,
                foodInterval: null,
                snakeInterval: null,
                newGame: null,
                dir: '',
                
             
            }
        },
        created(){
            window.addEventListener('keyup', this.Controller);
        },
        watch: {
            score(updatedScore){
                    return updatedScore;
                },
        },
        computed:{
                CalculateRecord(){
                    if(this.score > this.record){
                        this.record = this.score;
                    }
                    return this.record;
                }
            },
        methods:{
            SetStep(){
                if(window.innerWidth < 450) return 32;

                else return 50;
            },
            Start(){
                this.isStart = !this.isStart;
                this.apples = [];
                this.newGame = new InitGame(this.$refs.area, this.areaSize, this.SetStep());
                if(this.isStart){
                  
                    this.newGame.CreateArea();
                    this.newGame.CreateFood();
                    this.newGame.InitSnake();
                    this.interval = setInterval(() => {
                        this.newGame.CreateFood();
                }, 3000)
                }
                
            },
            Restart(){
                this.isStart = !this.isStart;
                this.score = 0;
                clearInterval(this.snakeInterval);
                clearInterval(this.interval)
                this.reset = false;
            },


            Controller(el){
          
                    if((el.key == 'ArrowUp' || el.target.id == 'up') && this.dir != 'down' ){
                        this.dir = 'up'   
                    }        
                    if((el.key == 'ArrowDown' || el.target.id == 'down') && this.dir != 'up'){
                        this.dir = 'down'    
                    }  
                    if((el.key == 'ArrowLeft' || el.target.id == 'left') && this.dir != 'right'){
                        this.dir = 'left' 
                    }  
                    if((el.key == 'ArrowRight'|| el.target.id == 'right') && this.dir != 'left' ){
                        this.dir = 'right' 
                    }  
                    clearInterval(this.snakeInterval)
                    
                    this.snakeInterval = setInterval(() => {
                        this.score = this.newGame.count
                        this.newGame.SnakeMove(this.dir)
                        this.newGame.InitSnake();
                        if(this.newGame.ResetGame()){
                            clearInterval(this.interval)
                            clearInterval(this.snakeInterval);
                            this.reset = true;

                        }
                    },this.speed)
                }
            },

        }
    
        
</script>

<style scoped lang="scss">
.n-slider{
    width: 120px;
}
.snake{
    width: 100%;
    position: relative;
    min-height: auto;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    flex-direction: column;

}
.buttons{
    display: none;
    color: #f0a020;
    @media(max-width: 450px){
        width: 90%;
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    }
}

.resetCtx{
    filter: blur(5px);
    transition: filter 2s linear;
}
[v-cloak] {
  display: none;
}
#ctx{
    background-color: #141a21;
    border-radius: 5px;
    padding: 5px;
}
.text_lose{
    width: 100%;
    text-align: center;
    z-index: 2;
    color: white;
    font-size: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.area{
    position: relative;
}

.lose-enter-active,
.lose-leave-active {
  transition: opacity 0.5s ease;
}
.lose-enter-from,
.lose-leave-to {
  opacity: 0;
}

.dialog_anim-leave-active {
  transition: all 1s ease;
}
.dialog_anim-leave-to {
    opacity: 0;
}

    .interface{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 10px;
    }
    .score{
        color: white;
    }
    .record{
        color: white;
    }

</style>
