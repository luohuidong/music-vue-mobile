import * as types from './mutationTypes';

export default {
  [types.SET_SINGER](state, payload) {
    state.singer = payload.singer;
  },
  [types.SET_PLAYING_STATE](state, payload) {
    state.playing = payload.flag;
  },
  [types.SET_FULL_SCREEN](state, payload) {
    state.fullScreen = payload.flag;
  },
  [types.SET_PLAYLIST](state, payload) {
    state.playlist = payload.list;
  },
  [types.SET_SEQUENCE_LIST](state, payload) {
    state.sequenceList = payload.list;
  },
  [types.SET_PLAY_MODE](state, payload) {
    state.mode = payload.mode;
  },
  [types.SET_CURRENT_INDEX](state, payload) {
    state.currentIndex = payload.index;
  }
};
