import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Playlist from "./Playlist";
import styles from "./Welcome.module.scss";
const cb = classNames.bind(styles);
function Welcome() {
  const date = new Date();
  const hours = date.getHours();
  const [session, setSession] = useState("");
  const welcomeSection = useRef();
  const overlayHeight = useRef();
  // welcomeSection.current.offsetHeight + 64 + 24 + "px";
  useEffect(() => {
    if (hours > 17) {
      setSession("Chào buổi tối");
    } else if (hours > 13) {
      setSession("Chào buổi chiều");
    } else if (hours > 10) {
      setSession("Chào buổi trưa");
    } else if (hours > 0) {
      setSession("Chào buổi sáng");
    }
    overlayHeight.current.style.height =
      welcomeSection.current.offsetHeight + 64 + 24 + 55 + "px";
    return;
  }, [hours]);
  return (
    <section
      ref={welcomeSection}
      id="welcome-section"
      className={cb("wrapper")}
    >
      <div
        ref={overlayHeight}
        id="top-overlay"
        className={cb("overlay")}
        style={{
          // height: overlayHeight,
          backgroundColor: "rgb(72, 32, 176)",
        }}
      ></div>
      <h3 className={cb("head-tittle")}>{session}</h3>
      <Playlist />
    </section>
  );
}

export default Welcome;
