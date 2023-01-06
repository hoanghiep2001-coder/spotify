import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Welcome.module.scss";
const cb = classNames.bind(styles);
function Welcome() {
  const date = new Date();
  const hours = date.getHours();
  const [session, setSession] = useState("");
  useEffect(() => {
    if (hours > 0) {
      setSession("Chào buổi sáng");
    } else if (hours > 10) {
      setSession("Chào buổi trưa");
    } else if (hours > 13) {
      setSession("Chào buổi chiều");
    } else if (hours > 17) {
      setSession("Chào buổi tối");
    }
  }, [date]);
  return (
    <div className={cb("wrapper")}>
      <h3 className={cb("head-tittle")}>{session}</h3>
    </div>
  );
}

export default Welcome;
