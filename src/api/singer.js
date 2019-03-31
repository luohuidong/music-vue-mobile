import { get } from './request';

// 获取歌手列表
export function getSingerList({ cat=1001, initial, limit=30, offset=1 }={}) {
  const url = '/artist/list';
  const params = {
    cat,
    initial,
    limit,
    offset
  };
  return get(url, params).then(result => {
    const { artists } = result.data;
    return artists;
  });
}

// 获取热门歌手
export function getTopSingerList({ limit=30, offset=0 }={}) {
  const url = '/top/artists';
  const params = {
    limit,
    offset
  };
  return get(url, params).then(result => {
    const { artists } = result.data;
    return artists;
  });
}

// 获取歌手的热门歌曲
export function getSingerHotSong(singerId) {
  if (!singerId) return Promise.reject('未传歌手 id');

  const url = '/artists';
  const params = {
    id: singerId
  };
  
  return get(url, params).then(result => {
    const { artist, hotSongs } = result.data;
    return {
      artist,
      hotSongs
    };
  });
}
