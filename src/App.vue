<template>
  <div id="app">
    <Header />
    <Tab />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@components/Header/';
import Tab from '@components/Tab/';

export default {
  name: 'app',
  components: {
    Header,
    Tab
  }
};
</script>

<style scoped lang="stylus">
  @import "~@assets/stylus/variable"

  #app
    color: $color-theme
</style>
