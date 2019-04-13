import Song from '@utils/song';

function songs (state) {
  return state.hotSongs.map(element => new Song(element));
}

export default {
  songs
};
