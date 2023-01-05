import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cb = classNames.bind(styles);
function HeaderComp() {
  return <div className={cb("wrapper")}>Header</div>;
}

export default HeaderComp;
