// 迷你播放器歌曲列表按钮
<template>
  <div class="control">
    <i class="icon-playlist"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.control {
  flex: 0 0 30px;
  width: 30px;
  padding: 0 10px;

  .icon-playlist {
    font-size: 30px;
    color: $color-theme-d;
  }
}
</style>
