<template>
  <div class="background">
    <img width="100%" height="100%" :src="currentSong.img">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('player', [
      'currentSong'
    ])
  }
};
</script>

<style scoped lang="stylus">
  @import '~@assets/stylus/variable';
  @import '~@assets/stylus/mixin';

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
  }
</style>
