import types from './mutationTypes';

export default {
  [types.SINGER_DETAIL_REQUEST](state, payload) {
    state.singer = payload.artist;
    state.hotSongs = payload.hotSongs;
  }
};
