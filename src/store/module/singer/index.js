import actions from './actions';

import { 
  SINGER_LIST_REQUEST,
  SINGER_LIST_FAILURE
} from './mutationTypes';


const state = {
  singerList: []
};

const mutations = {
  [SINGER_LIST_REQUEST](state, payload) {
    state.singerList = payload.data;
  },
  [SINGER_LIST_FAILURE](state) {
    state.singerList = [];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
