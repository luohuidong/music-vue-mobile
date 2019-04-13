import { playMode } from '@utils/config';

export default {
  singer: {},
  playing: false, // 是否播放
  fullScreen: false, // 是否全屏
  playListIds: [], // 当前播放列表的歌曲 ids
  playListDatas: [], // 当前播放列表的歌曲数据
  sequenceList: [],
  mode: playMode.sequence, // 播放模式
  currentSongId: 0, // 当前播放歌曲的 id
};
