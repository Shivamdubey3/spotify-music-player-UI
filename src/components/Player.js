import React, { useEffect, useState, useRef } from "react";
import "../styles/Player.scss";

const Player = ({ song }) => {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgColor, setBgColor] = useState("#222");
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (song) {
      let storedSongs = JSON.parse(sessionStorage.getItem("recentlyPlayed")) || [];
      storedSongs = [song, ...storedSongs.filter((s) => s.title !== song.title)];

      if (storedSongs.length > 10) storedSongs.pop();
      sessionStorage.setItem("recentlyPlayed", JSON.stringify(storedSongs));
      setRecentlyPlayed(storedSongs);

      // Load the new song
      const audioPath = process.env.PUBLIC_URL + "/assets/" + song.audio;
      audioRef.current.src = audioPath;
      audioRef.current.load(); // Load new audio source
      setIsPlaying(false); // Reset play state

      // Get background color from album art
      getDominantColor(song.thumbnail);
    }
  }, [song]);

  // Play / Pause Audio
  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play().catch(() => {
          console.warn("User interaction required to play audio.");
        });
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  // Extract Dominant Color from Thumbnail
  const getDominantColor = (imageSrc) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = process.env.PUBLIC_URL + imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const pixelData = ctx.getImageData(0, 0, 1, 1).data;
      const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      setBgColor(color);
    };
  };

  // Toggle Favorite Songs
  const toggleFavorite = () => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.title === song.title)) {
      updatedFavorites = favorites.filter((fav) => fav.title !== song.title);
    } else {
      updatedFavorites = [...favorites, song];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="player-container" style={{ background: bgColor }}>
      <h3>{song.title}</h3>
      <p>{song.artistName}</p>
      <img
        src={process.env.PUBLIC_URL + song.thumbnail}
        alt="Album Art"
        className="album-art"
      />

      <div className="controls">
        <button onClick={() => (audioRef.current.currentTime -= 10)}>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={() => (audioRef.current.currentTime += 10)}>⏭</button>
        <button className="fav-btn" onClick={toggleFavorite}>
          {favorites.some((fav) => fav.title === song.title) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default Player;
