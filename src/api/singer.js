import { get } from './request';

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
