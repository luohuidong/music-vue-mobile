import { getSingerHotSong } from "@api/singer";
import types from "./mutationTypes";

async function handleGetSingerHotSong(context, singerId) {
  const { commit } = context;
  try {
    const { artist, hotSongs } = await getSingerHotSong(singerId);
    commit(types.SINGER_DETAIL_REQUEST, {
      artist,
      hotSongs
    });
  } catch (error) {
    commit(types.SINGER_DETAIL_REQUEST, {
      artist: [],
      hotSongs: []
    });    
  }
}

export default {
  handleGetSingerHotSong
};
