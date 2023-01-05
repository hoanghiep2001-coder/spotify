import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PlusIcon,
  HeartIcon,
  SoundIcon,
  PauseIcon,
} from "~/Components/Icons/icons";
import styles from "./RootList.module.scss";
const cb = classNames.bind(styles);
function RootList({ status = false }) {
  const [songStatus, setSongStatus] = useState("");
  useEffect(() => {
    if (!status) {
      setSongStatus(<PauseIcon className={cb("sound-icon")} />);
    } else {
      setSongStatus(<SoundIcon className={cb("sound-icon")} />);
    }
  }, [status]);
  return (
    <ul className={cb("list")}>
      <li>
        <div className={cb("item")}>
          <div className={cb("icon-wrapper")}>
            <PlusIcon className={cb("icon")} />
          </div>

          <h3 className={cb("text")}>Tạo playlist</h3>
        </div>
      </li>
      <li>
        <NavLink
          className={(nav) => cb("item", { active: nav.isActive })}
          to={"/userCollection"}
        >
          <div className={cb("icon-wrapper-collection")}>
            <HeartIcon className={cb("icon")} />
          </div>
          <h3 className={cb("text")}>Bài hát đã thích</h3>
          <div className={cb("icon-song")}>{songStatus}</div>
        </NavLink>
      </li>
    </ul>
  );
}

export default RootList;
