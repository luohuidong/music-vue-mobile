// 迷你播放器
<template>
  <transition name="mini">
    <div class="mini-player" v-if="!fullScreen" @click="setFullScreen(true)">
      <MiniPlayerImage/>
      <MiniPlayerText/>
      <MiniPlayerPlayButton/>
      <MiniPlayerPlayListButton/>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MiniPlayerImage from "./MiniPlayerImage";
import MiniPlayerText from "./MiniPlayerText";
import MiniPlayerPlayButton from "./MiniPlayerPlayButton";
import MiniPlayerPlayListButton from "./MiniPlayerPlayListButton";

export default {
  components: {
    MiniPlayerImage,
    MiniPlayerText,
    MiniPlayerPlayButton,
    MiniPlayerPlayListButton
  },
  computed: {
    ...mapState("player", ["fullScreen"])
  },
  methods: {
    ...mapActions("player", ["setFullScreen"]),
    openNormalPlayer() {
      this.setFullScreen(true);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.mini-player {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 180;
  width: 100%;
  height: 60px;
  background: $color-highlight-background;

  &.mini-enter-active, &.mini-leave-active {
    transition: all 0.4s;
  }

  &.mini-enter, &.mini-leave-to {
    opacity: 0;
  }
}
</style>
