import classNames from "classnames/bind";
import { PauseIcon2 } from "~/Components/Icons/icons";
import ListSong from "~/Components/Layout/components/UserCollection/ListSong";
import Song from "~/Components/Layout/components/UserCollection/ListSong/Song";
import styles from "./UserCollection.module.scss";
const cb = classNames.bind(styles);
function UserCollection() {
  const getSongApi = JSON.parse(localStorage.getItem("api"));
  return (
    <div className={cb("inner")}>
      <section className={cb("handleSong-wrapper")}>
        <div className={cb("handleSong-icon")}>
          <PauseIcon2 className={cb("handleSong-mainIcon")} />
        </div>
      </section>
      <section className={cb("list-song")}>
        <ListSong>
          {getSongApi.playlists.userCollection.map((song, index) => {
            return (
              <Song
                dataID={index}
                key={song.id}
                songID={song.id}
                songAuthor={song.author}
                songDuration={song.duration}
                // songCreatedAt
                songAlbum={song.album}
                songTitle={song.title}
                songThumb={song.thumbnail}
                onClick={song.url}
              />
            );
          })}
        </ListSong>
      </section>
    </div>
  );
}

export default UserCollection;
