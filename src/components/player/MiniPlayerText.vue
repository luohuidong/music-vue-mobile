// 迷你播放器中显示的文字
<template>
  <div class="text">
    <h2 class="name" v-html="currentSong.name"></h2>
    <p class="desc" v-html="currentSong.singer"></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("player", [
      "currentSong"
    ])
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;

  .name {
    margin-bottom: 2px;
    no-wrap();
    font-size: $font-size-medium;
    color: $color-text;
  }

  .desc {
    no-wrap();
    font-size: $font-size-small;
    color: $color-text-d;
  }
}
</style>
