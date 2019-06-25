<template>
  <audio
    :src="currentSong.url"
    ref="audio"
    @timeupdate="timeUpdate"
    @durationchange="durationChange"
  ></audio>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("player", ["currentSong"]),
    ...mapState("player", ["playingState"])
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
  },
  methods: {
    ...mapActions("player", ["saveCurrentTime", "saveTotalTime"]),
    formatTime(time = 0) {
      const minute = Math.floor(time / 60);
      let second = Math.floor(time % 60);
      const length = second.toString().length;
      if (length < 2) {
        second = `0${second}`;
      }
      return `${minute}:${second}`;
    },
    timeUpdate({ target }) {
      const { currentTime } = target;
      this.saveCurrentTime(currentTime);
    },
    durationChange({ target }) {
      const { duration } = target;
      this.saveTotalTime(duration);
    }
  }
};
</script>

<style>
</style>
