import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { TimeIcon } from "~/Components/Icons/icons";

import styles from "./ListSong.module.scss";
const cb = classNames.bind(styles);
function ListSong({ children }) {
  return (
    <div className={cb("menu")}>
      <div className={cb("title")} element-explain="row">
        <div className={cb("title-song")} element-explain="col-5 row">
          <div className={cb("title-numbered")} element-explain="col-1">
            <h3>#</h3>
          </div>
          <div className={cb("title-song-content")} element-explain="col-11">
            <h3>TIÊU ĐỀ</h3>
          </div>
        </div>
        <div className={cb("title-album")} element-explain="col-3">
          <h3>ALBUM</h3>
        </div>
        <div className={cb("title-createdAt")} element-explain="col-2">
          <h3>NGÀY THÊM</h3>
        </div>
        <Tippy content="Thời lượng">
          <div className={cb("title-time")} element-explain="col-2">
            <TimeIcon />
          </div>
        </Tippy>
      </div>
      <div className={cb("content")}>{children}</div>
    </div>
  );
}

export default ListSong;
