<template>
  <div class="container" ref="container">
    <div class="inner-container">
      <div class="bar" ref="bar"></div>
      <BottomProgressBar />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BottomProgressBar from "./BottomProgressBarButton";

const buttonWidth = 16;

export default {
  components: {
    BottomProgressBar
  },
  computed: {
    ...mapState("player", ["currentTime", "duration"]),
    precent() {
      if (this.duration !== 0) {
        const currentTime = this.formatTime(this.currentTime);
        const duration = this.formatTime(this.duration);
        return currentTime / duration;
      }
      return 0;
    },
  },
  watch: {
    precent(newValue) {
      const progressbarMaxWidth = this.$refs.container.clientWidth - buttonWidth;
      // 计算进度条与 Botton 的偏移量
      const offset = newValue * progressbarMaxWidth;
      // 设置 bar 的宽度
      this.$refs.bar.style.width = `${offset}px`;
      this.saveProgressBarOffset(offset);
      this.saveProgressBarMaxWidth(progressbarMaxWidth);
    }
  },
  methods: {
    ...mapActions("player", ["saveProgressBarOffset", "saveProgressBarMaxWidth"]),
    formatTime(string) {
      const arr = string.split(":");
      return parseInt(arr[0]) * 60 + parseInt(arr[1]);
    }
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
}
</style>

