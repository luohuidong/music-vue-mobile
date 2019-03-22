<template>
  <ScrollView :auto-reflow="true" :scrolling-x="false">

    <ul>
      <li v-for="item in data" class="list-group-item" :key="item.key">
        <img class="avatar" v-lazy="item.picture" alt="item.name">
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </ScrollView>
</template>

<script>
import { ScrollView } from 'mand-mobile';
export default {
  components: {
    ScrollView
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@assets/stylus/variable';

.list-group-item {
  display: flex;
  align-items: center;
  padding: 20px 0 0 30px;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .name {
    margin-left: 20px;
    color: $color-text-l;
    font-size: $font-size-medium;
  }
}
</style>
