function shortcutList() {
  let shortcuts = [
    {
      key: "hot",
      text: "热",
      description: "热门歌手",
      value: "hot"
    }
  ];

  for (let i = 97; i <= 122; i++) {
    const character = String.fromCharCode(i);
    shortcuts.push({
      key: i,
      text: character.toUpperCase(),
      description: character.toUpperCase(),
      value: character
    });
  }
  return shortcuts;
}

const shortcutListData = shortcutList();

export default {
  singerList: [],
  shortcutListData: shortcutListData,
  currentShortcut: shortcutListData[0]
};
