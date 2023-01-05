import styles from "./MusicPlayer.module.scss";
import classNames from "classnames/bind";

const cb = classNames.bind(styles);
function MusicPlayer() {
  return <div className={cb("wrapper")}>MusicPlayer</div>;
}

export default MusicPlayer;
