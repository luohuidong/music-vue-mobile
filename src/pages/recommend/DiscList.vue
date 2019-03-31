<template>
  <div>
    <h1>热门歌单推荐</h1>
    <Loading v-if="isLoading" />
    <ul>
      <li v-for="item in recommendedPlayList" :key="item.id" class="item">
        <div class="icon">
          <img v-lazy="item.coverImgUrl" :alt="item.name">
        </div>
        <div class="text">
          <h2 class="name">{{ item.name }}</h2>
          <p class="desc">{{ item.tags.join(', ') }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from '@components/Loading/';

export default {
  components: {
    Loading,
  },
  data() {
    return {
    };
  },
  computed: {
    isLoading() {
      let loading = false;
      if (this.recommendedPlayList.length === 0) {
        loading = true;
      }
      return loading;
    },
    ...mapState('recommend', {
      recommendedPlayList: state => state.recommendedPlayList
    })
  },
  created() {
    this.handleGetRecommendPlayList();
  },
  methods: {
    ...mapActions('recommend', [
      'handleGetRecommendPlayList'
    ])
  }
};
</script>

<style lang="stylus" scoped>
@import '~@assets/stylus/variable';

h1 {
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.item {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;

  .icon {
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;

    img {
      width: 60px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    font-size: $font-size-medium;

    .name {
      margin-bottom: 10px;
      color: $color-text;
    }

    .desc {
      color: $color-text-d;
    }
  }
}
</style>
