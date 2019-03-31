<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
};
</script>

<style scoped lang="stylus">
  @import "~@assets/stylus/variable"

  #app
    color: $color-theme
</style>
