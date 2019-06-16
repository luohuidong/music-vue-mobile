import * as types from "./mutationTypes";

export default {
  [types.SET_PLAY_LIST](state, payload) {
    state.currentSongId = payload.currentSongId;
    state.fullScreen = payload.fullScreen;
    state.playListDatas = payload.playListDatas;
    state.playListIds = payload.playListIds;
    state.playingState = payload.playingState;
    state.sequenceListIds = payload.sequenceListIds;
  },
  [types.SET_FULL_SCREEN](state, payload) {
    state.fullScreen = payload.fullScreen;
  },
  [types.SET_PLAYING_STATE](state, playload) {
    state.playingState = playload.playingState;
  }
};
