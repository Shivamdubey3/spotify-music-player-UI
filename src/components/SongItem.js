import React from "react";
import "../styles/SongItem.scss";

const SongItem = ({ song, onSelectSong }) => {
  return (
    <div className="song-item" onClick={() => onSelectSong(song)}>
      <img src={song.thumbnail} alt={song.title} />
      <div>
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongItem;
