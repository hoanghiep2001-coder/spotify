import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/animations/scale.css";
import classNames from "classnames/bind";
import Button from "~/Components/Button";
import {
  ArrownDownIcon,
  ArrownLeftIcon,
  ArrownRightIcon,
  UpgradeIcon,
} from "~/Components/Icons/icons";
import styles from "./Header.module.scss";
import avatar from "~/image/User/avt.jpg";
import WidgetItem from "./WidgetItem";

const cb = classNames.bind(styles);
function HeaderComp({ ...props }) {
  const [headerStyle, setHeaderStyle] = useState({
    opacity: "1",
    backgroundColor: "rgb(29,13,70)",
  });
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 100) {
        setHeaderStyle({
          opacity: "0.45",
          backgroundColor: "rgb(29,13,70)",
        });
      } else if (window.scrollY > 200) {
        setHeaderStyle({
          opacity: "1",
          backgroundColor: "rgb(29,13,70)",
        });
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div {...props} className={cb("wrapper")}>
      <header className={cb("inner")} style={headerStyle}>
        <div className={cb("overlay")}></div>
        <div className={cb("arrown-actions")}>
          <Button
            to={
              localStorage.getItem("beforeURL") === "null"
                ? "/"
                : localStorage.getItem("beforeURL")
            }
            aria-label="Quay lại"
            className={cb("prevButton")}
          >
            <ArrownLeftIcon />
          </Button>
          <Button
            to={localStorage.getItem("currentURL")}
            aria-label="Tiếp theo"
            className={cb("nextButton")}
          >
            <ArrownRightIcon />
          </Button>
        </div>
        <div className={cb("user-actions")}>
          <Button
            href="https://www.spotify.com/vn-vi/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
            blank=""
            target="_"
            className={cb("button-upgrade")}
          >
            Nâng cấp
          </Button>

          <Tippy
            interactive
            placement="top-start"
            render={(attrs) => (
              <div className={cb("widget-list")} tabIndex="-1" {...attrs}>
                <WidgetItem title="Tài khoản" icon={<UpgradeIcon />} link="/" />
                <WidgetItem title="Hồ sơ" link="/" />
                <WidgetItem
                  title="Nâng cấp lên Premium"
                  icon={<UpgradeIcon />}
                  link="/"
                />
                <WidgetItem title="Hỗ trợ" icon={<UpgradeIcon />} link="/" />
                <WidgetItem title="Tải xuống" icon={<UpgradeIcon />} link="/" />
                <WidgetItem title="Cài đặt" link="/" />
                <WidgetItem title="Đăng xuất" link="/" />
              </div>
            )}
          >
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
