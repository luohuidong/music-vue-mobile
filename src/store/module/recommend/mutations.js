import { PLAY_LIST_REQUEST, BANNER_REQUEST } from "./mutationTypes";

export default {
  [PLAY_LIST_REQUEST](state, payload) {
    state.recommendedPlayList = payload.data;
  },
  [BANNER_REQUEST](state, payload) {
    state.banner = payload.data;
  }
};
