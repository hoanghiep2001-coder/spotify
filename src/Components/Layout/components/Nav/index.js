import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { HomeIcon, LibraryIcon, SearchIcon } from "~/Components/Icons/icons";
const cb = classNames.bind(styles);
function Navigation() {
  return (
    <ul className={cb("list")}>
      <li>
        <NavLink
          className={(nav) => cb("item", { active: nav.isActive })}
          to={"/"}
        >
          <HomeIcon className={cb("icon")} />
          <h3 className={cb("text")}>Trang chủ</h3>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(nav) => cb("item", { active: nav.isActive })}
          to={"/search"}
        >
          <SearchIcon className={cb("icon")} />
          <h3 className={cb("text")}>Tìm kiếm</h3>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(nav) => cb("item", { active: nav.isActive })}
          to={"/library"}
        >
          <LibraryIcon className={cb("icon")} />
          <h3 className={cb("text")}>Thư viện</h3>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
