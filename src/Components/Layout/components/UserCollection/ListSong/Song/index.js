import classNames from "classnames/bind";
import { useState } from "react";
import {
  HeartHightlightIcon,
  PauseIcon,
  PlayIcon2,
} from "~/Components/Icons/icons";
import Image from "~/Components/Image";
import styles from "./Song.module.scss";
const cb = classNames.bind(styles);

function Song({
  songID,
  songThumb,
  songTitle,
  songAuthor,
  songAlbum,
  songDuration,
  onClick,
}) {
  const [songActiveClass, setSongActiveClass] = useState("song-default");
  // const [toggleSongIcon, setToggleSongIcon] = useState(false);
  const dayCreated = 15;
  const date = new Date();
  const today = date.getDate();
  let dayCreatedHtml = today - dayCreated;
  const handleActiveClickSong = () => {
    const activeSong = document.querySelector("[data-song].song-active");
    console.log(activeSong);
    if (activeSong) {
      activeSong.classList.add("song-default");
      activeSong.classList.remove("song-active");
    }
    setSongActiveClass("song-active");
  };
  const handlePlaySong = () => {
    localStorage.setItem("now_playing", onClick);
    const audio = document.querySelector("#audio");
    audio.setAttribute("src", localStorage.getItem("now_playing"));
    audio.play();
  };
  // const handleSetToggleSongIcon = () => {
  //   if (songActiveClass === "active") {
  //     setToggleSongIcon(<PauseIcon width="1.4rem" height="1.4rem" />);
  //   } else {
  //     setToggleSongIcon(<PlayIcon2 width="1.4rem" height="1.4rem" />);
  //   }
  // };
  // const removeHandleSetToggleSongIcon = () => {
  //   setToggleSongIcon(false);
  // };
  return (
    <div
      data-song
      onClick={handleActiveClickSong}
      className={cb(songActiveClass)}
      // onMouseEnter={handleSetToggleSongIcon}
      // onMouseLeave={removeHandleSetToggleSongIcon}
    >
      <div
        className={cb("item")}
        element-explain="row"
        onClick={handlePlaySong}
      >
        <div className={cb("title")} element-explain="col-5 row">
          <div className={cb("numbered")}>
            <h3>
              {songActiveClass === "song-active" ? (
                <Image
                  src="https://open.spotifycdn.com/cdn/images/equaliser-green.f8937a92.svg"
                  alt="play-note-icon"
                />
              ) : (
                songID
              )}
              {/* {toggleSongIcon === false && songActiveClass !== "active"
                ? songID
                : toggleSongIcon} */}
            </h3>
          </div>
          <div className={cb("title-wrapper")}>
            <div className={cb("thumbnail")}>
              <img
                className={cb("thumbnail-desc")}
                src={songThumb}
                alt={songThumb}
              />
            </div>
            <div className={cb("title-content")}>
              <h3 className={cb("title-desc")}>{songTitle}</h3>
              <p className={cb("author-desc")}>{songAuthor}</p>
            </div>
          </div>
        </div>
        <div className={cb("album")} element-explain="col-3">
          <h3 className={cb("album-desc")}>{songAlbum}</h3>
        </div>
        <div className={cb("createdAt")} element-explain="col-2">
          <h3 className={cb("createdAt-desc")}>
            {dayCreatedHtml == 0 ? "Hôm qua" : `${dayCreatedHtml} ngày trước`}
          </h3>
        </div>
        <div className={cb("time")} element-explain="col-2">
          <div className={cb("time-wrapper")}>
            <div>
              <HeartHightlightIcon className={cb("time-icon")} />
            </div>
            <h3 className={cb("duration")}>{songDuration}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;
