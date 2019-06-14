<template>
  <div class="icon">
    <img width="40" height="40" :src="currentSong.img">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("player", ["currentSong"])
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
</style>
