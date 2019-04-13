<template>
  <div class="normal-player" v-show="fullScreen">
    <transition name="normal">
      <div>
        <NormalPlayerBackground />
        <NormalPlayerTop />
        <NormalPlayerMiddle />
        <NormalPlayerBottom />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import NormalPlayerBackground from './NormalPlayerBackground.vue';
import NormalPlayerTop from './NormalPlayerTop.vue';
import NormalPlayerMiddle from './NormalPlayerMiddle.vue';
import NormalPlayerBottom from './NormalPlayerBottom.vue';

export default {
  components: {
    NormalPlayerBackground,
    NormalPlayerTop,
    NormalPlayerMiddle,
    NormalPlayerBottom,
  },
  computed: {
    ...mapState('player', [
      'fullScreen'
    ])
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
