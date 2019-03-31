<template>
  <ScrollView ref="scrollView" :scrolling-x="false">
    <slot></slot>
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
      types: Array,
      default: () => []
    }
  },
  watch: {
    data() {
      this.$refs.scrollView.reflowScroller();
    }
  }
};
</script>

<style scoped>

</style>
