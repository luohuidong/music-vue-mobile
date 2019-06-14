// 播放器
<template>
  <div class="player" v-show="playListDatas.length>0">
    <NormalPlayer/>
    <MiniPlayer/>
    <audio></audio>
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
      "playing"
    ]),
    ...mapGetters("player", ["currentSong"])
  },
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
