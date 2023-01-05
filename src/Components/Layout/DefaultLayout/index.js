import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cb = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cb("wrapper")}>
      <Sidebar />
      <div className={cb("container")}>
        <Header />
        <div className={cb("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
