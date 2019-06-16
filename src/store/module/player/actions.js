import * as types from "./mutationTypes";
import { getSongsDetail } from "@api/song";

async function setPlayList({ commit }, payload) {
  const songDetails = await getSongsDetail(payload.playListIds);

  commit(types.SET_PLAY_LIST, {
    currentSongId: payload.currentSongId,
    playListIds: payload.playListIds,
    sequenceListIds: payload.playListIds,
    playListDatas: songDetails,
    fullScreen: true,
    playing: true,
  });
}

function setFullScreen({ commit }, fullScreen) {
  commit(types.SET_FULL_SCREEN, {
    fullScreen
  });
}

export default {
  setPlayList,
  setFullScreen
};
