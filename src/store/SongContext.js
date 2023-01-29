import { createContext, useState } from "react";

const SongContext = createContext();

function SongProvider({ children }) {
  // get audio element
  const audio = document.querySelector("#audio");

  const [playSong, setPlaySong] = useState(false);
  const [mixSong, setMixSong] = useState(false);
  const [randomSong, setRandomSong] = useState(false);
  const [mixSongClass, setMixSongClass] = useState("default");
  const [turnbackSongClass, setRandomSongClass] = useState("default");

  const togglePlaySong = () => {
    setPlaySong(!playSong);
  };

  const toggleMixSong = () => {
    setMixSong(!mixSong);
  };

  const toggleTurnBackSong = () => {
    setRandomSong(!randomSong);
  };

  const toggleActiveMixIcon = () => {
    setMixSongClass(mixSongClass == "default" ? "active" : "default");
  };

  const toggleActiveRandomIcon = () => {
    setRandomSongClass(turnbackSongClass == "default" ? "active" : "default");
  };

  const value = {
    audio,
    playSong,
    mixSong,
    randomSong,
    mixSongClass,
    turnbackSongClass,
    togglePlaySong,
    toggleMixSong,
    toggleTurnBackSong,
    toggleActiveMixIcon,
    toggleActiveRandomIcon,
  };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
}

export default SongProvider;

export { SongContext, SongProvider };
