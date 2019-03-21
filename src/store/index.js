import Vue from 'vue';
import Vuex from 'vuex';

import recommend from './module/recommend';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recommend
  }
});

export default store;
