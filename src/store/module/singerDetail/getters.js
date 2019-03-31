import Song from '@assets/js/song';

function songs (state) {
  return state.hotSongs.map(element => new Song(element));
}

export default {
  songs
};
