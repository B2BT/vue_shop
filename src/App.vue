<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'app',
  router,
  components: { }
}
</script>

<style>
</style>
