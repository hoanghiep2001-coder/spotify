import classNames from "classnames/bind";
import { useEffect } from "react";
import { useContext } from "react";
import { useState, memo } from "react";
import {
  HeartHightlightIcon,
  PauseIcon,
  PlayIcon2,
} from "~/Components/Icons/icons";
import Image from "~/Components/Image";
import { SongContext } from "~/store/SongContext";
import styles from "./Song.module.scss";
const cb = classNames.bind(styles);

function Song({
  dataID = false,
  songID,
  songThumb,
  songTitle,
  songAuthor,
  songAlbum,
  songDuration,
  songUrl,
}) {
  const [songActiveClass, setSongActiveClass] = useState("song-default");
  const [toggleSongIcon, setToggleSongIcon] = useState(false);
  const dayCreated = 15;
  const date = new Date();
  const today = date.getDate();
  let dayCreatedHtml = today - dayCreated;
  const context = useContext(SongContext);

  const handleActiveClickSong = () => {
    const activeSong = document.querySelector("[data-song='song-active']");
    if (activeSong) {
      activeSong.setAttribute("data-song", "song-default");
    } else {
      setSongActiveClass("song-active");
    }
  };
  const handlePlaySong = () => {
    context.togglePlaySong(true);
    localStorage.setItem("now_playing", songUrl);
    context.audio.setAttribute("src", localStorage.getItem("now_playing"));
    context.audio.play();
  };

  useEffect(() => {
    if (context.playSong === true) {
      context.audio.play();
    } else {
      context.audio.pause();
    }

    return () => {};
  }, [context.playSong]);

  useEffect(() => {
    context.audio.setAttribute("src", localStorage.getItem("now_playing"));
  }, [context.audio]);

  const handleSetToggleSongIcon = () => {
    if (songActiveClass === "song-active") {
      setToggleSongIcon(<PauseIcon width="1.3rem" height="1.3rem" />);
    } else {
      setToggleSongIcon(<PlayIcon2 width="1.3rem" height="1.3rem" />);
    }
  };
  const removeHandleSetToggleSongIcon = () => {
    setToggleSongIcon(false);
  };
  return (
    <div
      data-song={songActiveClass}
      onClick={handleActiveClickSong}
      onMouseEnter={handleSetToggleSongIcon}
      onMouseLeave={removeHandleSetToggleSongIcon}
    >
      <div
        data-id={dataID}
        className={cb("item")}
        element-explain="row"
        onClick={handlePlaySong}
      >
        <div className={cb("title")} element-explain="col-5 row">
          <div className={cb("numbered")}>
            {songActiveClass === "song-active" ? (
              <Image
                className={cb("active-img-icon")}
                src="https://open.spotifycdn.com/cdn/images/equaliser-green.f8937a92.svg"
                alt="play-note-icon"
              />
            ) : (
              <h3>{toggleSongIcon ? toggleSongIcon : songID}</h3>
            )}
          </div>
          <div className={cb("title-wrapper")}>
            <div className={cb("thumbnail")}>
              <img
                data-song-thumbnail={songThumb}
                className={cb("thumbnail-desc")}
                src={songThumb}
                alt={"Ảnh Bài Hát"}
              />
            </div>
            <div className={cb("title-content")}>
              <h3 data-song-title={songTitle} className={cb("title-desc")}>
                {songTitle}
              </h3>
              <p data-song-author={songAuthor} className={cb("author-desc")}>
                {songAuthor}
              </p>
            </div>
          </div>
        </div>
        <div className={cb("album")} element-explain="col-3">
          <h3 className={cb("album-desc")}>{songAlbum}</h3>
        </div>
        <div className={cb("createdAt")} element-explain="col-2">
          <h3 className={cb("createdAt-desc")}>
            {dayCreatedHtml === 0 ? "Hôm qua" : `${dayCreatedHtml} ngày trước`}
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

export default memo(Song);
