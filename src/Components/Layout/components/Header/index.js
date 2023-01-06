import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import Button from "~/Components/Button";
import {
  ArrownDownIcon,
  ArrownLeftIcon,
  ArrownRightIcon,
} from "~/Components/Icons/icons";
import styles from "./Header.module.scss";
import avatar from "~/image/User/avt.jpg";

const cb = classNames.bind(styles);
function HeaderComp() {
  const [prevPage, setPrevPage] = useState("/");
  const [nextPage, setNextPage] = useState("/");
  const [headerStyle, setHeaderStyle] = useState({
    opacity: "1",
    backgroundColor: "rgba(30,15,71,1)",
  });
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 100) {
        setHeaderStyle({
          opacity: "0.45",
          backgroundColor: "rgba(30,15,71, 0.45)",
        });
      } else if (window.scrollY > 200) {
        setHeaderStyle({
          opacity: "1",
          backgroundColor: "rgb(30,15,71)",
        });
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <div className={cb("wrapper")}>
      <header className={cb("inner")} style={headerStyle}>
        <div className={cb("overlay")}></div>
        <div className={cb("arrown-actions")}>
          <Button
            to={prevPage}
            aria-label="Quay lại"
            className={cb("prevButton")}
          >
            <ArrownLeftIcon />
          </Button>
          <Button
            to={nextPage}
            aria-label="Tiếp theo"
            className={cb("nextButton")}
          >
            <ArrownRightIcon />
          </Button>
        </div>
        <div className={cb("user-actions")}>
          <Tippy placement="bottom" content="Nâng cấp lên Premium">
            <Button
              href="https://www.spotify.com/vn-vi/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
              blank=""
              target="_"
              className={cb("button-upgrade")}
            >
              Nâng cấp
            </Button>
          </Tippy>

          <Tippy content="Dương Hiệp" placement="bottom">
            <div className={cb("user-widget")}>
              <img
                src={avatar}
                alt="user-avatar"
                className={cb("user-avatar")}
              />
              <h3 className={cb("user-name")}>Dương Hiệp</h3>
              <ArrownDownIcon className={cb("icon-arrownDown")} />
            </div>
          </Tippy>
        </div>
      </header>
    </div>
  );
}

export default HeaderComp;
