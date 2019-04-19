<template>
  <div id="app">
    <keep-alive include="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app{
  overflow-x: hidden;
}
</style>


