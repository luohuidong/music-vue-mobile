import * as types from "./mutationTypes";
import { getSongsDetail } from "@api/song";

/**
 * 设置当前播放器的播放列表
 */
async function setPlayList({ commit }, payload) {
  const songDetails = await getSongsDetail(payload.playListIds);

  commit(types.SET_PLAY_LIST, {
    currentSongId: payload.currentSongId, // 当前选中的歌曲
    playListIds: payload.playListIds, // 当前播放列表中的歌曲 ids（无序）
    sequenceListIds: payload.playListIds, // 当前播放列表的歌曲 ids（有序）
    playListDatas: songDetails, // 当前播放列表中的歌曲数据
    fullScreen: true, // 将播放器设置为全屏
    playingState: true, // 当前播放器设置为播放状态
  });
}

/**
 * 设置播放器是否为全屏
 * @param {boolean} fullScreen 是否全屏
 */
function setFullScreen({ commit }, fullScreen) {
  commit(types.SET_FULL_SCREEN, {
    fullScreen
  });
}

/**
 * 设置播放器的播放状态
 * @param {boolean} playingState 播放状态 true or false
 */
function setPlayingState({ commit }, playingState) {
  commit(types.SET_PLAYING_STATE, {
    playingState
  });
}

export default {
  setPlayList,
  setFullScreen,
  setPlayingState
};
