import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import Button from "~/Components/Button";
import { BsSearch } from "react-icons/bs";
import { IoHomeOutline, IoLibraryOutline } from "react-icons/io5";

const cb = classNames.bind(styles);
function Navigation() {
  return (
    <ul className={cb("list")}>
      <li>
        <Button className={cb("item")} href={"/"}>
          <IoHomeOutline className={cb("icon")} />
          <h3 className={cb("text")}>Trang chủ</h3>
        </Button>
      </li>
      <li>
        <Button className={cb("item")} href={"/search"}>
          <BsSearch className={cb("icon")} />
          <h3 className={cb("text")}>Tìm kiếm</h3>
        </Button>
      </li>
      <li>
        <Button className={cb("item")} href={"/library"}>
          <IoLibraryOutline className={cb("icon")} />
          <h3 className={cb("text")}>Thư viện</h3>
        </Button>
      </li>
    </ul>
  );
}

export default Navigation;
