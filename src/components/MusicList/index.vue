// 音乐列表
<template>
  <div class="music-list">
    <Picture 
      :picture="picture" 
      :title="title" 
      :songs="songs"
    />
    <div class="scroll-view-container">
      <ScrollView :data="songs">
        <SongList :songs="songs" @select="selectItem"/>
      </ScrollView>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ScrollView from "@components/ScrollView/";
import Picture from "./Picture";
import SongList from "./SongList";

export default {
  components: {
    SongList,
    Picture,
    ScrollView
  },
  props: {
    picture: { // 歌手图片
      type: String,
      default: ""
    },
    songs: { // 歌手歌曲
      type: Array,
      defualt: () => []
    },
    title: { // 歌手名称
      type: String,
      defualt: ""
    }
  },
  computed: {
    songIds() { // 歌手歌曲 ids
      return this.songs.map(element => element.id);
    }
  },
  methods: {
    ...mapActions("player", [
      "setPlayList",
    ]),
    selectItem(item) {
      const data = {
        playListIds: this.songIds,
        currentSongId: item.id
      };
      this.setPlayList(data);
    },
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
