import { get } from './request';

/**
 * 获取热门歌单
 */
export function getRecommendedPalyList() {
  const url = '/top/playlist';
  const param = {
    limit: 10,
    order: 'new'
  };
  return get(url, param).then(result => {
    const { playlists } = result.data;
    return playlists;
  });
}


