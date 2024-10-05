<template> 
    <div  v-cloak class="snake">
        <Transition name="dialog_anim">
            <Popup 
            :gameState="isStart"
            :startingGame="Start">
                <label for="size">Размер арены: {{ areaSize }}</label>
                <br>
                <input type="range" v-model="areaSize" step="2" min="14" max="24">
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
    let rAF = "";
    import Controls from '@/components/Controls.vue';
    import {Init, CreateFood, DrawSnake, SnakeMove, ClearArea, drawScore} from '@/scripts/snake';
    import Popup from '@/components/Popup.vue';

    export default{
        components:{
            Popup,
            Controls
        },  
        data(){
            return{
                areaSize: 14,
                score: 0,
                record: 0,
                apples: [],
                dir: null,
                spawnFood: null,
                isStart: false,
                reset: false,
                speed: 0, 
                maxSpeed: 6,
                loop: undefined
            }
        },
        created(){
            window.addEventListener('keyup', this.Controller)
        },
        watch: {

        },
        computed:{
                CalculateRecord(){
                    
                    if(this.score > this.record){
                        this.record = this.score;
                    }
                    return this.record;
                },
                LoopState(){
                if(!this.loop){
                    console.log('res')
                }
                    else{
                        console.log('start')
                    }
                }
            },
        methods:{
            SetStep(){
                if(window.innerWidth < 450) return 16;

                else return 32;
            },
            gameLoop() {
                this.loop = window.requestAnimationFrame(this.gameLoop);
                if (++this.speed < this.maxSpeed) {
                    return;
                }
                this.speed = 0;
                ClearArea();
                DrawSnake();
                this.score = drawScore()
                SnakeMove(this.dir, this.score)
                
             

            },
            Start(){
                this.isStart = !this.isStart;
                if(this.isStart){
                Init(this.$refs.area, this.areaSize, this.SetStep(), this.apples);
                CreateFood();
                setInterval(() => CreateFood(), 3000);
                }
                window.requestAnimationFrame(this.gameLoop)
                
               

            },

            Restart(){
                this.isStart = !this.isStart;
                ClearArea();
                this.score = 0;
                this.reset = false;
                cancelAnimationFrame(this.loop)
                
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

                },
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
