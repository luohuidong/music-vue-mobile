<template>
  <div class="control">
    <i :class="playIconClass" @click.stop="togglePlay"></i>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("player", ["playingState"]),
    playIconClass() {
      return this.playingState ? "icon-pause-mini" : "icon-play-mini";
    }
  },
  methods: {
    ...mapActions("player", [
      "setPlayingState"
    ]),
    togglePlay() {
      this.setPlayingState(!this.playingState);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.control {
  flex: 0 0 30px;
  width: 30px;
  padding: 0 10px;

  .icon-play-mini,
  .icon-pause-mini {
    font-size: 30px;
    color: $color-theme-d;
  }
}
</style>
