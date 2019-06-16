// 播放器
<template>
  <div class="player" v-show="playListDatas.length>0">
    <NormalPlayer/>
    <MiniPlayer/>
    <audio :src="currentSong.url" ref="audio"></audio>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NormalPlayer from "./NormalPlayer.vue";
import MiniPlayer from "./MiniPlayer.vue";

export default {
  components: {
    NormalPlayer,
    MiniPlayer
  },
  computed: {
    ...mapState("player", [
      "currentSongId",
      "playListIds",
      "sequenceListIds",
      "playListDatas",
      "fullScreen",
      "mode",
      "playingState"
    ]),
    ...mapGetters("player", ["currentSong"])
  },
  watch: {
    currentSong() {
      this.$nextTick(() => {
        this.$refs.audio.play();
      });
    },
    playingState(newValue) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newValue ? audio.play() : audio.pause();
      });
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '~@assets/stylus/variable';
@import '~@assets/stylus/mixin';

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
