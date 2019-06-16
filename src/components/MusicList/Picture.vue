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
    
    <div 
      v-show="songs.length>0" 
      class="play-button" 
      @click="random"
    >
      <i class="icon-play"></i>
      <span class="text">随机播放全部</span>
    </div>

    <img :src="picture" :alt="title">
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      defualt: ""
    },
    songs: {
      type: Array,
      defualt: () => []
    }
  },
  methods: {
    handleIconClick() {
      this.$router.go(-1);
    },
    random() {

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

  .play-button {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%);
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid;
    border-radius: 20px;

    .text {
      padding-left: 10px;
    }
  }

  img {
    width: 100%;
  }
}
</style>
