import { PLAY_LIST_REQUEST, BANNER_REQUEST } from './mutationTypes';
import actions from './actions';

const state = {
  recommendedPlayList: [],
  banner: []
};

const mutations = {
  [PLAY_LIST_REQUEST](state, payload) {
    state.recommendedPlayList = payload.data;
  },
  [BANNER_REQUEST](state, payload) {
    state.banner = payload.data;
  }
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
