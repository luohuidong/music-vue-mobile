import {
  SINGER_LIST_REQUEST,
  SINGER_LIST_FAILURE,
  SINGER_SET_CURRENT_SHORTCUR
} from "./mutationTypes";

export default {
  [SINGER_LIST_REQUEST](state, payload) {
    state.singerList = payload.data;
  },
  [SINGER_LIST_FAILURE](state) {
    state.singerList = [];
  },
  [SINGER_SET_CURRENT_SHORTCUR](state, payload) {
    state.currentShortcut = payload.data;
  }
};
