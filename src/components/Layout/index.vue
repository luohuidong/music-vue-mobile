<template>
  <div>
    <Header />
    <Tab />
    <slot></slot>
  </div>
</template>

<script>
import Header from '@components/Header';
import Tab from '@components/Tab';

export default {
  components: {
    Header,
    Tab,
  }
};
</script>

<style>

</style>
