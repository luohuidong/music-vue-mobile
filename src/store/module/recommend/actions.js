import { PLAY_LIST_REQUEST, BANNER_REQUEST } from "./mutationTypes";

import { getBanner } from "@api/banner";
import { getRecommendedPalyList } from "@api/playlist";

/**
 * 获取热门歌单
 * @param {object} context
 */
async function handleGetRecommendPlayList({ commit }) {
  try {
    const result = await getRecommendedPalyList();
    
    commit(PLAY_LIST_REQUEST, {
      data: result
    });
  } catch (error) {
    commit(PLAY_LIST_REQUEST, {
      data: []
    });
  }
}

async function handleGetBanner({ commit }) {
  try {
    const result = await getBanner();
    
    commit(BANNER_REQUEST, {
      data: result
    });
  } catch (error) {
    commit(BANNER_REQUEST, {
      data: []
    });
  }
}

export default {
  handleGetRecommendPlayList,
  handleGetBanner
};
