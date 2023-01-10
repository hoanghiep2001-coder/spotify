import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PauseIcon, PlayIcon } from "~/Components/Icons/icons";
import styles from "./PlaylistItem.module.scss";
const cb = classNames.bind(styles);
function PlaylistItem({ title, thumbnail, path }) {
  return (
    <Link className={cb("wrapper")} to={path}>
      <div className={cb("thumbnail")}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={cb("status")}>
        <h3 className={cb("title")}>{title}</h3>
        <div className={cb("icon")}>
          {false ? (
            <PauseIcon width="2.4rem" height="2.4rem" />
          ) : (
            <PlayIcon width="2.4rem" height="2.4rem" viewBox="0 0 24 24" />
          )}
        </div>
      </div>
    </Link>
  );
}

export default PlaylistItem;
