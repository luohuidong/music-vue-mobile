<template>
  <div class="list-shortcut">
    <ul>
      <li
        v-for="(item, index) in singer.shortcutListData" 
        :data-index="index"
        :class="{ item: true, current: singer.currentShortcut.value === item.value }"
        :key="item.key"
        @click="handleClick(item)"
      >{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      singer: state => state.singerList
    })    
  },
  methods: {
    ...mapActions("singerList", [
      "handleGetSingerList",
      "handleTopSingerList",
      "setCurrentShortcut",
    ]),
    handleClick(item) {
      this.setCurrentShortcut(item);
      if (item.value === "hot") {
        this.handleTopSingerList();
      } else {
        this.handleGetSingerList({
          initial: item.value
        });
      }
    },
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';

.list-shortcut {
  position: absolute;
  z-index: 30;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  padding: 20px 0;
  border-radius: 10px;
  text-align: center;
  background: $color-background-d;
  font-family: Helvetica;

  .item {
    padding: 3px;
    line-height: 1;
    color: $color-text-l;
    font-size: $font-size-small;

    &.current {
      color: $color-theme;
    }
  }
}
</style>
