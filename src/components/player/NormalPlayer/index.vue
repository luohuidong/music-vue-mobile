// 全屏播放器
<template>
  <transition name="normal">
    <div class="normal-player" v-if="fullScreen">
      <Background/>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

import Background from "./Background.vue";
import Top from "./Top.vue";
import Middle from "./Middle.vue";
import Bottom from "./Bottom.vue";

export default {
  components: {
    Background,
    Top,
    Middle,
    Bottom,
  },
  computed: {
    ...mapState("player", ["fullScreen"])
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.normal-player {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: $color-background;

  &.normal-enter-active, &.normal-leave-active {
    transition: all 0.4s;

    .top, .bottom {
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
  }

  &.normal-enter, &.normal-leave-to {
    opacity: 0;

    .top {
      transform: translate3d(0, -100px, 0);
    }

    .bottom {
      transform: translate3d(0, 100px, 0);
    }
  }
}
</style>
