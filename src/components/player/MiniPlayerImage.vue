<template>
  <div class="icon">
    <img width="40" height="40" :src="currentSong.img">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('player', ['currentSong'])
  },
  methods: {
    getMiniPlayerImagePositionAndInitialScale() {
      const imageWidth = 40; // 图片宽度为 40 像素
      const imageCentertoLeft = 40; // 图片中心点到屏幕左侧的距离为 40 像素
      const imageCentertoBottom = 30; // 图片中心点到屏幕下方的距离为 30 像素

      const targetImageCenterWidth = window.innerWidth * 0.8;
    }
  }
};
</script>

<style scoped lang='scss'>
.icon {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  padding: 0 10px 0 20px;

  img {
    border-radius: 50%;

    &.play {
      animation: rotate 10s linear infinite;
    }

    &.pause {
      animation-play-state: paused;
    }
  }
}
</style>
