import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import NavItem from "./NavItem";
import { HomeIcon, SearchIcon, LibraryIcon } from "~/Components/Icons/icons";
import { useState } from "react";

const cb = classNames.bind(styles);
function Navigation() {
  return (
    <ul className={cb("list")}>
      <NavItem icon={<HomeIcon />} title="Trang chủ" to="/" urlStorage="/" />
      <NavItem
        icon={<SearchIcon />}
        title="Tìm kiếm"
        to="/search"
        urlStorage="/search"
      />
      <NavItem
        icon={<LibraryIcon />}
        title="Thư viện"
        to="/library"
        urlStorage="/library"
      />
    </ul>
  );
}

export default Navigation;
