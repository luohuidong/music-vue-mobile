// 全屏播放器底部
<template>
  <div class="bottom">
    <div class="operators">
      <div class="icon i-left">
        <i class="icon-sequence"></i>
      </div>

      <div class="icon i-left">
        <i class="icon-prev"></i>
      </div>

      <div class="icon i-center">
        <i :class="playIconClass" @click="togglePlay"></i>
      </div>

      <div class="icon i-right">
        <i class="icon-next"></i>
      </div>

      <div class="icon i-right">
        <i class="icon-playlist"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("player", [
      "playingState"
    ]),
    playIconClass() {
      return this.playingState ? "icon-pause" : "icon-play";
    },
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
.bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;

  .dot-wrapper {
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      vertical-align: middle;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }

  .progress-wrapper {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    padding: 10px 0;

    .time {
      color: $color-text;
      font-size: $font-size-small;
      flex: 0 0 30px;
      line-height: 30px;
      width: 30px;

      &.time-l {
        text-align: left;
      }

      &.time-r {
        text-align: right;
      }
    }

    .progress-bar-wrapper {
      flex: 1;
    }
  }

  .operators {
    display: flex;
    align-items: center;

    .icon {
      flex: 1;
      color: $color-theme;

      &.disable {
        color: $color-theme-d;
      }

      i {
        font-size: 30px;
      }
    }

    .i-left {
      text-align: right;
    }

    .i-center {
      padding: 0 20px;
      text-align: center;

      i {
        font-size: 40px;
      }
    }

    .i-right {
      text-align: left;
    }

    .icon-favorite {
      color: $color-sub-theme;
    }
  }
}
</style>
