import Vue from 'vue';
import Vuex from 'vuex';

import recommend from './module/recommend';
import singer from './module/singer';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recommend,
    singer
  }
});

export default store;
