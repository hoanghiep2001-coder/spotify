import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import MusicPlayer from "./MusicPlayer";

const cb = classNames.bind(styles);

function DefaultLayout({ children }) {
  const windowHeight = window.innerHeight - 90 + "px";
  return (
    <div
      className={cb("wrapper")}
      style={{
        height: windowHeight,
      }}
    >
      <Sidebar />
      <div className={cb("container")}>
        <Header />
        <div className={cb("content")}>{children}</div>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default DefaultLayout;
