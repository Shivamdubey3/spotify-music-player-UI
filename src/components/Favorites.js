import React from "react";

const Favorites = ({ setCurrentSong }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites-container">
      <h2>Favourite Songs</h2>
      {favorites.length === 0 ? <p>No favorite songs yet.</p> : (
        <ul>
          {favorites.map((song, index) => (
            <li key={index} onClick={() => setCurrentSong(song)}>
              {song.title} - {song.artistName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
