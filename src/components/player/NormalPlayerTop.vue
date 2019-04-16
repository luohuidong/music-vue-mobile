<template>
  <transition name="normal">
    <div class="top">
      <div class="back" @click="setFullScreen(false)">
        <i class="icon-back"></i>
      </div>
      <h1 class="title" v-html="currentSong.name"></h1>
      <h2 class="subtitle" v-html="currentSong.singer"></h2>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('player', [
      'currentSong',
    ])
  },
  methods: {
    ...mapActions('player', ['setFullScreen']),
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.top {
  position: relative;
  margin-bottom: 25px;

  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;

    .icon-back {
      display: block;
      padding: 9px;
      font-size: $font-size-large-x;
      color: $color-theme;
      transform: rotate(-90deg);
    }
  }

  .title {
    width: 70%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    no-wrap();
    font-size: $font-size-large;
    color: $color-text;
  }

  .subtitle {
    line-height: 20px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-text;
  }

  &.normal-enter-active, &.normal-leave-active {
    transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
  }

  &.normal-enter, &.normal-leave-to {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
}



</style>
