// 迷你播放器歌曲图片
<template>
  <div class="icon">
    <img width="40" height="40" :src="currentSong.img" :class="cdClass">
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("player", ["playingState"]),
    ...mapGetters("player", ["currentSong"]),
    cdClass() {
      return this.playingState ? "play" : "play pause";
    }
  },
  methods: {
    
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

@keyframes rotate {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
