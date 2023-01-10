import PlaylistItem from "./PlaylistItem";
import styles from "./Playlist.module.scss";
import classNames from "classnames/bind";
const cb = classNames.bind(styles);
const API = JSON.parse(localStorage.getItem("api"));

function Playlist() {
  return (
    <div className={cb("wrapper")}>
      {API.welcomePlaylists.map((playlist) => {
        return (
          <div className={cb("column")}>
            <PlaylistItem
              key={playlist.id}
              title={playlist.title}
              thumbnail={playlist.thumb}
              path={playlist.path}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
