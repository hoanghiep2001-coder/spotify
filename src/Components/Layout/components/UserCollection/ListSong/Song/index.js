import classNames from "classnames/bind";
import { HeartHightlightIcon } from "~/Components/Icons/icons";
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
  const handleOnClickSong = () => {
    localStorage.setItem("now_playing", onClick);
    const audio = document.querySelector("#audio");
    audio.setAttribute("src", localStorage.getItem("now_playing"));
    audio.play();
  };
  const dayCreated = 15;
  const date = new Date();
  const today = date.getDate();
  let dayCreatedHtml = today - dayCreated;
  return (
    <div
      className={cb("item")}
      element-explain="row"
      onClick={handleOnClickSong}
    >
      <div className={cb("title")} element-explain="col-5 row">
        <div className={cb("numbered")}>
          <h3>{songID}</h3>
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
  );
}

export default Song;
