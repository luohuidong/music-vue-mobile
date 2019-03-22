<template>
  <div>
    <md-swiper ref="swiper" :is-prevent="false" :useNative-driver="false">
      <md-swiper-item :key="item.imageUrl" v-for="item in banner">
        <img :src="item.imageUrl" alt>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Swiper, SwiperItem } from 'mand-mobile';

export default {
  components: {
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      banner: state => state.recommend.banner
    })
  },
  created() {
    this.handleGetBanner();
  },
  methods: {
    ...mapActions({
      handleGetBanner: 'recommend/handleGetBanner'
    })
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
