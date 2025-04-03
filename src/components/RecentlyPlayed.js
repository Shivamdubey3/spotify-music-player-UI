import React, { useEffect, useState } from "react";
import "../styles/RecentlyPlayed.scss";

const RecentlyPlayed = ({ setCurrentSong }) => {
  const [recentSongs, setRecentSongs] = useState([]);

  useEffect(() => {
    const storedSongs = JSON.parse(sessionStorage.getItem("recentlyPlayed")) || [];
    setRecentSongs(storedSongs);
  }, []);

  return (
    <div className="recently-played-container">
      <h2>Recently Played</h2>
      {recentSongs.length === 0 ? (
        <p className="no-songs">No songs played yet.</p>
      ) : (
        <div className="recent-list">
          {recentSongs.map((song, index) => (
            <div key={index} className="recent-item" onClick={() => setCurrentSong(song)}>
              <img src={process.env.PUBLIC_URL + song.thumbnail} alt={song.title} className="recent-thumbnail" />
              <div className="recent-info">
                <h4 className="recent-title">{song.title}</h4>
                <p className="recent-artist">{song.artistName}</p>
              </div>
              <span className="recent-duration">{song.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
