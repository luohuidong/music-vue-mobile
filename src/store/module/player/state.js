import { playMode } from "@utils/config";

export default {
  singer: {}, // 歌手信息
  playingState: false, // 是否播放
  fullScreen: false, // 是否全屏
  playListIds: [], // 列表歌曲 ids
  playListDatas: [], // 当前播放列表的歌曲数据
  sequenceListIds: [], // 当前播放歌曲列表 ids
  mode: playMode.sequence, // 播放模式
  currentSongId: 0, // 当前播放歌曲的 id
  currentTime: "0:00", // 当前歌曲播放节点对应的时间
  duration: "0:00", // 当前歌曲总时长
  progressBarOffset: 0, // 进度条偏移量
  progressBarMaxWidth: 0, // 进度条最大长度
};
