
<template>
  <Header></Header>
  <RouterView/>
</template>

<script>
import Header from '@/components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
export default{
  components: {
    Header
  },
}
</script>

<style scoped>
</style>
