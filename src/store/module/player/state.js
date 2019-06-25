import { playMode } from "@utils/config";

export default {
  singer: {},
  playingState: false, // 是否播放
  fullScreen: false, // 是否全屏
  playListIds: [], // 列表歌曲 ids
  playListDatas: [], // 当前播放列表的歌曲数据
  sequenceListIds: [], // 当前播放歌曲列表 ids
  mode: playMode.sequence, // 播放模式
  currentSongId: 0, // 当前播放歌曲的 id
  currentTime: "0:00", // 当前歌曲播放节点对应的时间
  totalTime: "0:00", // 当前歌曲总时间
};
