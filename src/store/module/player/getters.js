/**
 * 获取当前歌曲信息
 */
function currentSong(state) {
  return state.playListDatas.find(element => element.id === state.currentSongId) || {};
}

/**
 * 获取相邻位置的歌曲 id
 */
function getSibilingSongId(state) {
  /**
   * @param {string} sibilingType 'next' or 'sibiling'
   */
  return sibilingType => {
    const sequenceListIds = state.sequenceListIds;
    const numberOfSongs = sequenceListIds.length;
    
    const currentSongId = state.currentSongId;
    const currentSongIndex = sequenceListIds.findIndex(id => id === currentSongId);

    let nextSongIndex = -1;

    if (sibilingType === "previous") {
      nextSongIndex = currentSongIndex > 0 ? currentSongIndex - 1 : numberOfSongs - 1;
    } else {
      nextSongIndex = currentSongIndex < numberOfSongs - 1 ? currentSongIndex + 1 : 1;
    }

    return sequenceListIds[nextSongIndex];
  };
}

export default {
  currentSong,
  getSibilingSongId,
};
