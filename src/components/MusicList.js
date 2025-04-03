import React, { useState } from "react";
import "../styles/MusicList.scss";

const MusicList = ({ setCurrentSong }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const songData = [
    { title: "Starboy", artistName: "The Weeknd", duration: "4:16", thumbnail: "/assets/starboy.jpeg", audio: "starboy.mp3" },
    { title: "Demons", artistName: "Imagine Dragons", duration: "5:24", thumbnail: "/assets/viva_la_vida.jpeg", audio: "demons.mp3" },
    { title: "Mouth of the River", artistName: "Imagine Dragons", duration: "5:23", thumbnail: "/assets/starboy.jpeg", audio: "mouth-of-the-river.mp3" },
    { title: "Ghost Stories", artistName: "Coldplay", duration: "3:10", thumbnail: "/assets/viva_la_vida.jpeg", audio: "ghost-stories.mp3" },
    { title: "Sparks", artistName: "Coldplay", duration: "4:23", thumbnail: "/assets/starboy.jpeg", audio: "sparks.mp3" },
    { title: "Viva La Vida", artistName: "Coldplay", duration: "5:32", thumbnail: "/assets/viva_la_vida.jpeg", audio: "viva-la-vida.mp3" },
    { title: "Hymn for the Weekend", artistName: "Coldplay", duration: "2:23", thumbnail: "/assets/starboy.jpeg", audio: "hymn-for-the-weekend.mp3" },
    { title: "Pain", artistName: "Ryan Jones", duration: "3:12", thumbnail: "/assets/viva_la_vida.jpeg", audio: "pain.mp3" }
  ];

  // Filter songs based on search term
  const filteredSongs = songData.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="music-list-container">
      <h3 className="section-title">For You</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Song..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <div key={index} className="song-item" onClick={() => setCurrentSong(song)}>
              <img src={process.env.PUBLIC_URL + song.thumbnail} alt={song.title} className="song-thumbnail" />
              <div className="song-info">
                <h4 className="song-title">{song.title}</h4>
                <p className="song-artist">{song.artistName}</p>
              </div>
              <span className="song-duration">{song.duration}</span>
            </div>
          ))
        ) : (
          <p className="no-results">No songs found</p>
        )}
      </div>
    </div>
  );
};

export default MusicList;
