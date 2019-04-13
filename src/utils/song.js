export default class Song {
  constructor(song) {
    const {
      id, // 歌曲 id
      name, // 歌曲名称
      ar, // 歌手
      al, // 专辑
    } = song;

    this.id = id;
    this.name = name;
    this.singer = this.getSinger(ar);
    this.album = al;
  }

  getSinger(singer) {
    return singer.map(element => element.name).join('/');
  }
}

export class SongDetail extends Song {
  constructor(song) {
    super(song);
    this.url = song.url;
    this.img = song.img;
  }
}
