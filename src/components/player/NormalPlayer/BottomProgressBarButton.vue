<template>
  <div 
    class="button-wrapper" 
    ref="buttonWrapper"
    v-on:touchstart="handleTouchStart"
    v-on:touchmove="handleTouchMove"
    v-on:touchend="handleTouchEnd"
  >
    <div class="button" ref="button"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      startX: 0,
    };
  },
  computed: {
    ...mapState("player", ["progressBarOffset", "progressBarMaxWidth"])
  },
  watch: {
    progressBarOffset(newValue) {
      this.$refs.buttonWrapper.style.left = -8 + newValue + "px";
    }
  },
  created() {
    this.touch = {};
  },
  methods: {
    handleTouchStart(e) {
      this.startX = e.touches[0].pageX;

    },
    handleTouchMove(e) {
      const deltaX = e.touches[0].pageX - this.touch.startX;
      console.log("TCL: handleTouchMove -> deltaX", deltaX)
      const offset = Math.min(this.progressBarMaxWidth, Math.max(0, this.touch.left + deltaX));
    },
    handleTouchEnd(e) {

    }
  }
};
</script>

<style scoped lang="scss">
@import "~@assets/styles/variable";

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
</style>
