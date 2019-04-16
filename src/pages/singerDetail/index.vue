<template>
  <div class="container">
    <MusicList :songs="songs" :picture="singer.picUrl" :title="singer.name"/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import MusicList from '@components/MusicList';

export default {
  components: {
    MusicList
  },
  computed: {
    ...mapState('singerDetail', {
      singer: state => state.singer
    }),
    ...mapGetters('singerDetail', ['songs'])
  },
  created() {
    const { singerId } = this.$route.params;
    this.handleGetSingerHotSong(singerId);
  },
  watch: {
    '$route' (to) {
      const { singerId } = to.params;
      this.handleGetSingerHotSong(singerId);
    }
  },
  methods: {
    ...mapActions('singerDetail', ['handleGetSingerHotSong'])
  }
};
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  height: 100vh;
}
</style>
