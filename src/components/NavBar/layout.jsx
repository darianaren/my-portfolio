import React, { useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import { NAV_ITEMS } from "./constants";

import { useExitDirection } from "../../context/ExitDirectionContext";

export const NavItem = ({ to, icon, label, isExternal, download }) => {
  const location = useLocation();
  const { setExitDirection, setCurrentIndexPath, setPrevIndexPath } =
    useExitDirection();

  const currentPath = to;
  const prevPath = location.pathname;

  const paths = NAV_ITEMS.map((item) => item.to);
  const currentIndex = paths.indexOf(currentPath);
  const prevIndex = prevPath ? paths.indexOf(prevPath) : 0;

  let direction = "up";

  if (prevIndex > currentIndex) direction = "down";

  const handleScrollTop = useCallback(() => {
    setExitDirection(direction);
    setPrevIndexPath(prevIndex);
    setCurrentIndexPath(currentIndex);
  }, [
    direction,
    prevIndex,
    currentIndex,
    setExitDirection,
    setPrevIndexPath,
    setCurrentIndexPath
  ]);

  if (isExternal) {
    return (
      <a href={to} download={download} className={styles.inactive}>
        <img width={20} height={20} src={icon} alt={label} className="icon" />
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      onClick={handleScrollTop}
      className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
    >
      <img width={20} height={20} src={icon} alt={label} className="icon" />
    </NavLink>
  );
};
