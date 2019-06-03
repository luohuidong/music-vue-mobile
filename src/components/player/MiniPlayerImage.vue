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
      // 以屏幕左下角为原点，屏幕底边向右为 x 轴，屏幕侧边向上为 y 轴做直角坐标系

      const imageWidth = 40; // 图片宽度为 40 像素
      const imageCenterToLeft = 40; // 图片中心点到屏幕左侧的距离为 40 像素
      const imageCenterToBottom = 30; // 图片中心点到屏幕下方的距离为 30 像素
      const imageCenter = { // 图片中心坐标
        x: imageCenterToLeft, 
        y: imageCenterToBottom
      }; 

      const targetImageWidth = window.innerWidth * 0.8; // 目标位置图片宽度
      const targetImageToTop = 80;
      const targetImageCenter = { // 目标图片的中心坐标
        x: window.innerWidth / 2,
        y: window.innerHeight - targetImageToTop - targetImageWidth / 2
      };

      const initialScall = imageWidth / targetImageWidth; // 图片相对于目标图片的缩放比
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
