import { get } from "./request";
import { SongDetail } from "@utils/song";

/**
 * 获取音乐详情
 * @param {string} songIds 歌曲 ids
 */
export async function getSongsDetail(songIds) {
  const getSongsDetail = get("/song/detail", {
    ids: songIds
  });

  const getSongsUrl = get("/song/url", {
    id: songIds
  });
  
  try {
    const result = await Promise.all([getSongsDetail, getSongsUrl]);
		
    let songs = result[0].data.songs;
    let songsUrlData = result[1].data.data;

    songs = songs.map(song => {
      const result = songsUrlData.find(urlData => urlData.id === song.id);
      song.url = result.url;
      song.img = song.al.picUrl;
      return new SongDetail(song);
    });

    return songs;

  } catch (error) {
    return [];
  }
  
}
