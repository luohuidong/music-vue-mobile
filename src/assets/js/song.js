export default class Song {
  constructor({ id, name, ar, al }) {
    this.id = id;
    this.name = name;
    this.singer = this.getSinger(ar);
    this.album = al;
  }

  getSinger(singer) {
    return singer.map(element => element.name).join('/');
  }
}
