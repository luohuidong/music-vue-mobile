<template>
  <div class="container" ref="container">
    <div class="inner-container">
      <div class="bar" ref="bar"></div>

      <div class="button-wrapper" ref="buttonWrapper">
        <div class="button" ref="button"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const buttonWidth = 16;

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState("player", ["currentTime", "duration"]),
    precent() {
      if(this.duration !== 0) {
        const currentTime = this.formatTime(this.currentTime)
        const duration = this.formatTime(this.duration)
        return currentTime / duration;
      }
      return 0;
    }
  },
  watch: {
    precent(newValue) {
      const containerWidth = this.$refs.container.clientWidth;
      const barTotalWidth = containerWidth - buttonWidth;
      console.log("TCL: precent -> barTotalWidth", barTotalWidth)

      const offset = newValue * barTotalWidth;
      console.log("TCL: precent -> newValue", newValue)
      this.$refs.bar.style.width = `${offset}px`; // 设置 bar 的宽度

      this.$refs.buttonWrapper.style.left = -8 + offset + "px";
      console.log("TCL: precent -> this.$refs.buttonWrapper", this.$refs.buttonWrapper)
    }
  },
  methods: {
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

    .button-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
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
}
</style>

