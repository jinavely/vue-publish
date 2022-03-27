<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view> <!-- 컨텐츠가 보이는 곳 -->
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
export default {
  components: { AppHeader },
  name: 'App',
}
</script>

<style>
</style>
