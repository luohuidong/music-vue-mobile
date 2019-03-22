<template>
  <div 
    class="list-shortcut" 
  >
    <ul>
      <li
        v-for="(item, index) in shortcutList" 
        :data-index="index"
        :class="{ item: true, current: currentValue === item.value }"
        :key="item.key"
        @click="handleClick(item)"
      >{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      currentValue: 'hot'
    };
  },
  computed: {
    shortcutList() {
      let shortcuts = [
        {
          key: 'hot',
          text: '热',
          value: 'hot'
        }
      ];

      for (let i = 97; i <= 122; i++) {
        const character = String.fromCharCode(i);
        shortcuts.push({
          key: i,
          text: character.toUpperCase(),
          value: character
        });
      }
      return shortcuts;
    }
  },
  methods: {
    ...mapActions({
      handleGetSingerList: 'singer/handleGetSingerList',
      handleTopSingerList: 'singer/handleTopSingerList'
    }),
    handleClick(item) {
      this.currentValue = item.value;
      if (item.value === 'hot') {
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
