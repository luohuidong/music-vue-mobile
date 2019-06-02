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

  .icon-play-mini,
  .icon-pause-mini,
  .icon-playlist {
    font-size: 30px;
    color: $color-theme-d;
  }

  .icon-mini {
    font-size: 32px;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
