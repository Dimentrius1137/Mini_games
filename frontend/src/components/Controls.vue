<template>
        <div class="control">
            <up/>
            <button id="up" class="btn" :disabled="disable"></button>
        </div>
            <div class="horizontal">
                <div class="control">
                    <left/>
                    <button id="left" class="btn" :disabled="disable"></button>
                </div>
                
                <div class="control">
                    <right/>
                    <button id="right" class="btn" :disabled="disable"></button>
                </div>
            </div>
        <div class="control">
            <down/>
            <button id="down" class="btn" :disabled="disable"></button>
        </div>  
</template>

<script>
    import up from '@/assets/SVG/up.svg';
    import down from '@/assets/SVG/down.svg';
    import left from '@/assets/SVG/left.svg';
    import right from '@/assets/SVG/right.svg';
    export default{
        components:{
            up, down, left, right
        },
        props: ['disable']
    }
</script>

<style scoped lang="scss">

    .control{
    position: relative;

}

    .btn, .btn:visited, .btn:focus{
        width: 100%; 
        height: 100%;
        position: absolute; 
        left: 0;
        background-color: rgba(0, 0, 0, 0); 
        z-index: 2; 
        border: none;
    }
    .horizontal{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: space-around
    }
</style>