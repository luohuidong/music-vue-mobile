<template>
  <div class="progress-wrapper">
    <span class="time time-l">{{ currentTime }}</span>
    <div class="progress-bar-wrapper"></div>
    <span class="time time-r">{{ duration }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("player", ["currentTime", "duration"])
  }
};
</script>

<style scoped lang="scss">
@import '~@assets/styles/variable';
@import '~@assets/styles/mixin';

.progress-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;

  .time {
    color: $color-text;
    font-size: $font-size-small;
    flex: 0 0 30px;
    line-height: 30px;
    width: 30px;

    &.time-l {
      text-align: left;
    }

    &.time-r {
      text-align: right;
    }
  }

  .progress-bar-wrapper {
    flex: 1;
  }
}
</style>
