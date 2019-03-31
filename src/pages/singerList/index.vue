<template>
  <Layout>
    <div class="singer">
      <h2 class="list-group-title">{{ currentShortcut.description }}</h2>
      <div class="listVeiw">
        <ListView :data="singerData" @select="selectSinger"/>
      </div>
      <GoTo/>
    </div>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Layout from '@components/Layout';
import ListView from '@components/ListView/';
import GoTo from './GoTo.vue';

export default {
  components: {
    ListView,
    GoTo,
    Layout
  },
  computed: {
    ...mapState('singerList', {
      singerList: state => state.singerList,
      currentShortcut: state => state.currentShortcut
    }),
    singerData() {
      return this.singerList.map(({ id, name, img1v1Url }) => ({
        id,
        name,
        picture: img1v1Url
      }));
    }
  },
  created() {
    this.handleGetSingerList();
  },
  methods: {
    ...mapActions('singerList', ['handleGetSingerList']),
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/detail/${singer.id}`
      });
    }
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
  width: 100%;
  position: fixed;
  top: 118px;
  bottom: 0;
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
