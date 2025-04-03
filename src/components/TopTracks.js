import React from "react";
import "../styles/TopTracks.scss";

const TopTracks = ({ setCurrentSong }) => {
  const topTracks = [
    { title: "Blinding Lights", artistName: "The Weeknd", duration: "3:22", thumbnail: "/assets/blinding_lights.jpg", audio: "blinding_lights.mp3" },
    { title: "Levitating", artistName: "Dua Lipa", duration: "3:23", thumbnail: "/assets/levitating.jpg", audio: "levitating.mp3" },
    { title: "Shape of You", artistName: "Ed Sheeran", duration: "4:00", thumbnail: "/assets/shape_of_you.jpg", audio: "shape_of_you.mp3" },
    { title: "Someone Like You", artistName: "Adele", duration: "4:45", thumbnail: "/assets/someone_like_you.jpg", audio: "someone_like_you.mp3" },
    { title: "Don't Start Now", artistName: "Dua Lipa", duration: "3:07", thumbnail: "/assets/dont_start_now.jpg", audio: "dont_start_now.mp3" },
  ];

  return (
    <div className="top-tracks-container">
      <h2>Top Tracks</h2>
      <div className="track-list">
        {topTracks.map((track, index) => (
          <div key={index} className="track-item" onClick={() => setCurrentSong(track)}>
            <img src={process.env.PUBLIC_URL + track.thumbnail} alt={track.title} className="track-thumbnail" />
            <div className="track-info">
              <h4 className="track-title">{track.title}</h4>
              <p className="track-artist">{track.artistName}</p>
            </div>
            <span className="track-duration">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
