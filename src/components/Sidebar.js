import React, { useState } from "react";
import { FaHome, FaHeart, FaHistory } from "react-icons/fa";
import TopTracks from "./TopTracks";
import RecentlyPlayed from "./RecentlyPlayed";
import "../styles/Sidebar.scss";

const Sidebar = ({ setCurrentSong }) => {
  const [activeSection, setActiveSection] = useState("For You");

  return (
    <div className="main-container">
      <div className="sidebar">
        <img
          src={process.env.PUBLIC_URL + "/assets/spotify-logo1.jpeg"}
          alt="Spotify Logo"
          className="spotify-logo"
        />
        <ul className="menu">
          <li onClick={() => setActiveSection("For You")}>For You</li>
          <li onClick={() => setActiveSection("Top Tracks")}>Top Tracks</li>
          <li onClick={() => setActiveSection("Favourites")}>Favourites</li>
          <li onClick={() => setActiveSection("Recently Played")}>Recently Played</li>
        </ul>
      </div>

      <div className="content">
        {activeSection === "Top Tracks" && <TopTracks setCurrentSong={setCurrentSong} />}
        {activeSection === "Recently Played" && <RecentlyPlayed setCurrentSong={setCurrentSong} />}
      </div>
    </div>
  );
};

export default Sidebar;
