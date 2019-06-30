// 全屏播放器中部
<template>
  <div class="container">
    <div class="middle-l">
      <div class="cd-wrapper">
        <div class="cd" :class="cdClass">
          <img alt class="image" :src="currentSong.img">
        </div>
      </div>
    </div>
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
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

.container {
  position: fixed;
  width: 100%;
  top: 80px;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;

  .middle-l {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 80%;

    .cd-wrapper {
      position: absolute;
      left: 10%;
      top: 0;
      width: 80%;
      box-sizing: border-box;
      height: 100%;

      .cd {
        width: 100%;
        height: 100%;
        border-radius: 50%;

        .image {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 50%;
          border: 10px solid rgba(255, 255, 255, 0.1);
        }

        &.play {
          animation: rotate 20s linear infinite;
        }

        &.pause {
          animation-play-state: paused;
        }
      }
    }

    .playing-lyric-wrapper {
      width: 80%;
      margin: 30px auto 0 auto;
      overflow: hidden;
      text-align: center;

      .playing-lyric {
        height: 20px;
        line-height: 20px;
        font-size: $font-size-medium;
        color: $color-text-l;
      }
    }
  }

  .middle-r {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .lyric-wrapper {
      width: 80%;
      margin: 0 auto;
      overflow: hidden;
      text-align: center;

      .text {
        line-height: 32px;
        color: $color-text-l;
        font-size: $font-size-medium;

        &.current {
          color: $color-text;
        }
      }

      .pure-music {
        padding-top: 50%;
        line-height: 32px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
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
