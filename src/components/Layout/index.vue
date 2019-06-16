<template>
  <div>
    <Header />
    <Tab />
    <slot></slot>
  </div>
</template>

<script>
import Header from "./Header";
import Tab from "./Tab";

export default {
  components: {
    Header,
    Tab,
  }
};
</script>

<style>

</style>
