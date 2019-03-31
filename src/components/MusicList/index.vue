<template>
  <div class="music-list">
    <Picture :picture="picture" :title="title" />
    <div class="scroll-view-container">
      <ScrollView :data="songs">
        <SongList :songs="songs"/>
      </ScrollView>
    </div>
  </div>
</template>

<script>
import ScrollView from '@components/ScrollView/';
import Picture from './Picture';
import SongList from './SongList/';

export default {
  components: {
    SongList,
    Picture,
    ScrollView
  },
  props: {
    picture: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      defualt: () => []
    },
    title: {
      type: String,
      defualt: ''
    }
  }
};
</script>

<style scoped lang="scss">
.music-list {
  height: 100%;
  position: relative;
}

.scroll-view-container {
  position: fixed;
  top: 300px;
  bottom: 0px;
}
</style>
