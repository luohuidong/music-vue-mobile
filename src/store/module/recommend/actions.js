import { PLAY_LIST_REQUEST, BANNER_REQUEST } from './mutationTypes';

import { getBanner } from '@api/banner';
import { getRecommendedPalyList } from '@api/playlist';

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

function handleGetBanner({ commit }) {
  getBanner().then(result => {
    commit(BANNER_REQUEST, {
      data: result
    });
  });
}

export default {
  handleGetRecommendPlayList,
  handleGetBanner
};
