import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger';

import recommend from './module/recommend';
import singerList from './module/singerList';
import singerDetail from './module/singerDetail';
import player from './module/player';

Vue.use(Vuex);

const debug = process.env.NODE_ENV;

const store = new Vuex.Store({
  strict: debug !== 'production',
  plugins: debug ? [createLogger()] : [],
  modules: {
    recommend,
    singerList,
    singerDetail,
    player
  }
});

export default store;
