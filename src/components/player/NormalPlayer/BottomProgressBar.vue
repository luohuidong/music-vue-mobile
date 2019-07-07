<template>
  <div class="container" ref="container">
    <div class="inner-container">
      <div class="bar" ref="bar"></div>
    </div>

    <div
      class="button-wrapper"
      ref="buttonWrapper"
      v-on:touchstart="handleTouchStart"
      v-on:touchmove="handleTouchMove"
      v-on:touchend="handleTouchEnd"
    >
      <!-- <div class="button" ref="button"></div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const buttonWidth = 16;

export default {
  computed: {
    ...mapState("player", ["currentTime", "duration"]),
    precent() {
      if (this.duration !== 0) {
        const currentTime = this.formatTime(this.currentTime);
        const duration = this.formatTime(this.duration);
        return currentTime / duration;
      }
      return 0;
    }
  },
  watch: {
    precent(newValue) {
      const progressbarMaxWidth =
        this.$refs.container.clientWidth - buttonWidth;
      // 计算进度条与 Botton 的偏移量
      const offset = newValue * progressbarMaxWidth;
      // 设置 bar 的宽度
      this.$refs.bar.style.width = `${offset}px`;
      // this.$refs.buttonWrapper.style.left = -8 + offset + "px";
    }
  },
  methods: {
    formatTime(string) {
      const arr = string.split(":");
      return parseInt(arr[0]) * 60 + parseInt(arr[1]);
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].pageX;
    },
    handleTouchMove(e) {
      // 拖动起始点与拖动结束点的差值
      const deltaX = e.touches[0].pageX - this.touchStartX;
      // 进度条偏移量
      const progressBarOffset = Math.min(
        this.progressBarMaxWidth,
        Math.max(0, this.progressBarOffset + deltaX)
      );
      this.saveProgressBarOffset(progressBarOffset);
    },
    handleTouchEnd(e) {}
  }
};
</script>

<style scoped lang="scss">
@import "~@assets/styles/variable";

.container {
  height: 30px;

  .inner-container {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);

    .bar {
      position: absolute;
      height: 100%;
      background: $color-theme;
    }
  }

  .button-wrapper {
    position: absolute;
    width: 30px;
    height: 30px;

    .button {
      position: relative;
      top: 7px;
      left: 7px;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 3px solid $color-text;
      border-radius: 50%;
      background: $color-theme;
    }
  }
}
</style>

