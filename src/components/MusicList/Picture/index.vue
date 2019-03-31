<template>
  <div class="container">
    <div class="header">
      <div class="icon" @click="handleIconClick">
        <i class="icon-back"></i>
      </div>

      <div class="title">
        <h1 class="title-text">{{ title }}</h1>
      </div>
    </div>

    <img :src="picture" :alt="title">
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      defualt: ''
    }
  },
  methods: {
    handleIconClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 300px;
  overflow: hidden;

  .header {
    position: absolute;
    width: 100%;
    $height: 50px;

    .icon {
      position: absolute;
      left: 15px;
      height: $height;
      display: flex;
      align-items: center;
    }

    .title {
      height: $height;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    width: 100%;
  }
}
</style>
