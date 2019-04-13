<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player />
  </div>
</template>

<script>
import Player from '@components/player/index.vue';

export default {
  name: 'app',
  components: {
    Player
  }
};
</script>

<style scoped lang="stylus">
  @import "~@assets/stylus/variable"

  #app
    color: $color-theme
</style>
