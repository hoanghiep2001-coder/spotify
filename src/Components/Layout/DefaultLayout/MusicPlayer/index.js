import { SongContext } from "~/store/SongContext";
import styles from "./MusicPlayer.module.scss";
import classNames from "classnames/bind";
import Image from "~/Components/Image";
import { useContext, useState } from "react";
import {
  DeviceIcon,
  FlexBackIcon,
  FlexRandomIcon,
  HeartIcon,
  ListIcon,
  NextStickIcon,
  PauseIcon,
  PlayIcon2,
  PrevStickIcon,
  SoundIcon,
} from "~/Components/Icons/icons";
const cb = classNames.bind(styles);
function MusicPlayer() {
  const context = useContext(SongContext);
  const [songTitle, setSongTitle] = useState("Và ngày nào đó");
  const [songAuthor, setSongAuthor] = useState("Vũ Thảo My");
  const handlleAudioProgress = () => {
    console.log("Check");
  };
  const handlleVolumnProgress = () => {
    console.log("test");
  };

  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <div className={cb("song-description")}>
          <div>
            <Image className={cb("song-image")} />
          </div>
          <div className={cb("song-content")}>
            <div className={cb("wrapper-song-title")}>
              <h3 className={cb("song-title")}>{songTitle}</h3>
            </div>
            <p className={cb("song-author")}>{songAuthor}</p>
          </div>
          <div>
            <HeartIcon className={cb("heart-icon")} />
          </div>
        </div>
        <div className={cb("song-player")}>
          <div className={cb("player-wrapper")}>
            <div className={cb("player-actions")}>
              <div
                className={cb("wrapper-icon")}
                onClick={context.toggleActiveMixIcon}
              >
                <div className={cb(context.mixSongClass)}>
                  <FlexRandomIcon className={cb("player-icon")} />
                </div>
              </div>
              <div className={cb("wrapper-icon")}>
                <PrevStickIcon className={cb("player-icon")} />
              </div>
              <div
                className={cb("song-status")}
                onClick={context.togglePlaySong}
              >
                {context.playSong ? (
                  <PauseIcon className={cb("player-icon")} />
                ) : (
                  <PlayIcon2 className={cb("player-icon")} />
                )}
              </div>
              <div className={cb("wrapper-icon")}>
                <NextStickIcon className={cb("player-icon")} />
              </div>
              <div
                className={cb("wrapper-icon")}
                onClick={context.toggleActiveRandomIcon}
              >
                <div className={cb(context.turnbackSongClass)}>
                  <FlexBackIcon className={cb("player-icon")} />
                </div>
              </div>
            </div>
            <div className={cb("audio")}>
              <div className={cb("time-start")}>
                <p>00.00</p>
              </div>
              <div id="progress" className={cb("progress-bar")}>
                <input
                  type="range"
                  className={cb("audio-bar")}
                  value={1}
                  step={1}
                  onChange={handlleAudioProgress}
                  min={1}
                  max={100}
                />
              </div>
              <div className={cb("time-end")}>
                <p>04.50</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cb("song-extra-actions")}>
          <div className={cb("wrapper-icon")}>
            <ListIcon className={cb("player-icon")} />
          </div>
          <div className={cb("wrapper-icon")}>
            <DeviceIcon className={cb("player-icon")} />
          </div>
          <div className={cb("wrapper-icon")}>
            <SoundIcon className={cb("player-icon")} />
          </div>
          <div className={cb("song-volumn")}>
            <input
              type="range"
              className={cb("volumn-bar")}
              value={1}
              step={1}
              onChange={handlleVolumnProgress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
