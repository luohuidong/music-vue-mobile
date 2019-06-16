<template>
  <Layout>
    <div class="recommend">
      <ScrollView 
        :auto-reflow="true"
        :scrolling-x="false"
        >
        <Banner />
        <div class="recommend-list">
          <DiscList/>
        </div>
      </ScrollView>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import { ScrollView } from "mand-mobile";

import Layout from "@components/Layout";
import Banner from "./Banner.vue";
import DiscList from "./DiscList.vue";

export default {
  components: {
    ScrollView,
    Banner,
    DiscList,
    Layout
  },
  computed: {
    ...mapState("recommend", {
      recommendedPlayList: state => state.recommendedPlayList
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '~@assets/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
