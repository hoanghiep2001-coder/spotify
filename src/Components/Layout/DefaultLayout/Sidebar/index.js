import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Navigation from "../../components/Nav";
import { NavLink } from "react-router-dom";
import RootList from "../../components/Sidebar/RootList";
import { DownloadIcon, SpotifyLogo } from "~/Components/Icons/icons";
const cb = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <NavLink className={cb("link-home")} to={"/"}>
          <SpotifyLogo className={cb("logo")} />
        </NavLink>
      </div>
      <Navigation />
      <RootList />
      <div className={cb("download")}>
        <NavLink
          className={(nav) => cb("download-item", { active: nav.isActive })}
          to={"/download"}
        >
          <div className={cb("icon-wrapper")}>
            <DownloadIcon className={cb("icon")} />
          </div>
          <h3 className={cb("text")}>Cài đặt Ứng dụng</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
