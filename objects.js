var playlist = { Garth: 'The Dance' };

var updatePlaylist = (playlist, artistName, songTitle) => {
  return Object.assign({}, playlist, { [artistName]: songTitle });
};
