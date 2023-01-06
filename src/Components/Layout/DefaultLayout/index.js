import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import MusicPlayer from "./MusicPlayer";

const cb = classNames.bind(styles);

function DefaultLayout({ children }) {
  const sidebarHeight = window.innerHeight - 90 + "px";
  const contentHeight = window.innerHeight - 90 - 64 + "px";
  return (
    <div
      className={cb("wrapper")}
      style={{
        height: sidebarHeight,
      }}
    >
      <Sidebar />
      <div className={cb("container")}>
        <Header />
        <div
          className={cb("content")}
          style={{
            maxHeight: contentHeight,
          }}
        >
          {children}
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default DefaultLayout;
