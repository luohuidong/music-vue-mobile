import { 
  SINGER_LIST_REQUEST,
  SINGER_LIST_FAILURE
} from './mutationTypes';

import { getSingerList, getTopSingerList } from '@api/singer';

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

export default {
  handleGetSingerList,
  handleTopSingerList
};
