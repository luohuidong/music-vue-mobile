import { 
  SINGER_LIST_REQUEST,
  SINGER_LIST_FAILURE,
  SINGER_SET_CURRENT_SHORTCUR,
} from "./mutationTypes";

import { getSingerList, getTopSingerList } from "@api/singer";

async function handleGetSingerList({ commit }, params) {
  commit(SINGER_LIST_REQUEST, {
    data: []
  });
  try {
    const result = await getSingerList(params);
    
    commit(SINGER_LIST_REQUEST, {
      data: result
    });
  } catch (error) {
    commit(SINGER_LIST_FAILURE);
  }
}

async function handleTopSingerList({ commit }, params) {
  commit(SINGER_LIST_REQUEST, {
    data: []
  });
  try {
    const result = await getTopSingerList(params);
    commit(SINGER_LIST_REQUEST, {
      data: result
    });
  } catch (error) {
    commit(SINGER_LIST_FAILURE);
  }
}

function setCurrentShortcut({ commit }, currentShortcut) {
  commit(SINGER_SET_CURRENT_SHORTCUR, {
    data: currentShortcut
  });  
}

export default {
  handleGetSingerList,
  handleTopSingerList,
  setCurrentShortcut
};
