function currentSong(state) {
  return state.playListDatas.find(element => element.id ===state.currentSongId) || {};
}

export default {
  currentSong
};
