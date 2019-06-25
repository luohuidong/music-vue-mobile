// 播放器
<template>
  <div class="player" v-show="playListDatas.length>0">
    <NormalPlayer/>
    <MiniPlayer/>
    <Audio />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NormalPlayer from "./NormalPlayer.vue";
import MiniPlayer from "./MiniPlayer.vue";
import Audio from "./Audio.vue";

export default {
  components: {
    NormalPlayer,
    MiniPlayer,
    Audio
  },
  computed: {
    ...mapState("player", ["playListDatas"]),
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
