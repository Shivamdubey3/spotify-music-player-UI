import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MusicList from "./components/MusicList";
import Player from "./components/Player";
import Favorites from "./components/Favorites";
import RecentlyPlayed from "./components/RecentlyPlayed";
import "./styles/App.scss";

const App = () => {
  const [activeSection, setActiveSection] = useState("For You");
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">
        {activeSection === "For You" && <MusicList setCurrentSong={setCurrentSong} />}
        {activeSection === "Favourites" && <Favorites setCurrentSong={setCurrentSong} />}
        {activeSection === "Recently Played" && <RecentlyPlayed setCurrentSong={setCurrentSong} />}
      </div>
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default App;
