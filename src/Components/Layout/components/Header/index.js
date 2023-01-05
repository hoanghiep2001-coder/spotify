import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "~/Components/Button";
import { ArrownLeftIcon, ArrownRightIcon } from "~/Components/Icons/icons";
import styles from "./Header.module.scss";

const cb = classNames.bind(styles);
function HeaderComp() {
  const [prevPage, setPrevPage] = useState("/");
  const [nextPage, setNextPage] = useState("/");
  const [headerStyle, setHeaderStyle] = useState({
    opacity: "1",
    backgroundColor: "rgb(72, 32, 176)",
  });
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 100) {
        setHeaderStyle({
          opacity: "0.45",
          backgroundColor: "rgb(72, 32, 176)",
        });
      } else if (window.scrollY > 200) {
        setHeaderStyle({
          opacity: "1",
          backgroundColor: "rgb(72, 32, 176)",
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
      <header
        className={cb("inner")}
        aria-label="Menu người dùng và thanh trên cùng"
        style={headerStyle}
      >
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
      </header>
    </div>
  );
}

export default HeaderComp;
