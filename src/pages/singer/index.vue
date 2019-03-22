<template>
  <div class="singer">
    <div class="listVeiw">
      <h2 class="list-group-title">热门歌手</h2>
      <ListView :data="singerData"/>
      <GoTo/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListView from './ListView.vue';
import GoTo from './GoTo.vue';

export default {
  components: {
    ListView,
    GoTo,
  },
  computed: {
    ...mapState({
      singerList: state => state.singer.singerList
    }),
    singerData() {
      return this.singerList.map(({ id, name, img1v1Url }) => ({
        key: id,
        name,
        picture: img1v1Url
      }));
    }
  },
  created() {
    this.handleGetSingerList();
  },
  methods: {
    ...mapActions({
      handleGetSingerList: 'singer/handleGetSingerList'
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '~@assets/stylus/variable';

.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}

.listVeiw {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
}

.list-group-title {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  font-size: $font-size-small;
  color: $color-text-l;
  background: $color-highlight-background;
}
</style>
