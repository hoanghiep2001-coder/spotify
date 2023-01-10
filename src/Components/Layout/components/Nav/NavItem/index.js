import classNames from "classnames/bind";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

const cb = classNames.bind(styles);
function NavItem({ icon, title, to, urlStorage }) {
  const getURL = localStorage.getItem("currentURL");
  const beforeURL = getURL;
  const HandleUrlStorage = () => {
    localStorage.setItem("beforeURL", beforeURL);
    localStorage.setItem("currentURL", urlStorage);
  };
  return (
    <li>
      <NavLink
        onClick={HandleUrlStorage}
        className={(nav) => cb("item", { active: nav.isActive })}
        to={to}
      >
        {icon}
        <h3 className={cb("text")}>{title}</h3>
      </NavLink>
    </li>
  );
}

export default NavItem;
