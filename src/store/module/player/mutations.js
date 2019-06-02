import * as types from './mutationTypes';

export default {
  [types.SET_PLAY_LIST](state, payload) {
    state.currentSongId = payload.currentSongId;
    state.fullScreen = payload.fullScreen;
    state.playListDatas = payload.playListDatas;
    state.playListIds = payload.playListIds;
    state.playing = payload.playing;
    state.sequenceListIds = payload.sequenceListIds;
  },
  [types.SET_FULL_SCREEN](state, payload) {
    state.fullScreen = payload.fullScreen;
  }
};
