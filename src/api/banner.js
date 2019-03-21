import { get } from './request';

export function getBanner() {
  const url = '/banner';
  return get(url).then(result => {
    const { banners } = result.data;
    return banners;
  });
}

