
    
<template>
  <h1>"{{ route.split('').splice(1).join('') }}" not found</h1>
    <button class="btn btn-success rounded-pill" @click="$router.push('/')">На главную</button>
</template>
<script>
    export default{
        data(){
            return{
                route: this.$route.path
            }
          
        }
    }
</script>
<style scoped>
  h1{
    color: white;
}
</style>