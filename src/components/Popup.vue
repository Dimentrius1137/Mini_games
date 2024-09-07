<template>
<div class="dialog" v-if="!gameState">
    <div class="dialog__content" v-if="!gameState">
        <div>
            <slot></slot>
        </div>
<button class="btn btn-success rounded-pill" @click="startingGame">Начать</button>

    </div>
</div>
</template>


<script>
    export default{
        props: ["gameState", "startingGame"]
    }
</script>
<style scoped lang="scss">
.dialog{
    width: 100%;
    height: calc(100vh - 50px);
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    animation: gameSettingsAnim1 0.5s ease;
    &__content{
        max-width: 400px;
        width: 70%;
        max-height: 300px;
        height: 200px;
        background-color:  rgb(53, 53, 167);
        animation: gameSettingsAnim2 1s ease;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        color: white
    }
}
    @keyframes gameSettingsAnim1 {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes gameSettingsAnim2 {
        from{
            opacity: 0;
            transform: scale(0.5) rotate(360deg);
        }
        to{
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }
</style>