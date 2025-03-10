import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

import { useExitDirection } from "../../context/ExitDirectionContext";

export const NavItem = ({
  to,
  icon,
  label,
  download,
  prevIndex,
  isExternal,
  pathsIndex
}) => {
  const { setExitDirection, setCurrentIndexPath, setPrevIndexPath } =
    useExitDirection();

  const currentPath = to;

  const currentIndex = pathsIndex.indexOf(currentPath);

  let direction = "up";

  if (prevIndex > currentIndex) direction = "down";

  const onClickLink = useCallback(() => {
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
      onClick={onClickLink}
      className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
    >
      <img width={20} height={20} src={icon} alt={label} className="icon" />
    </NavLink>
  );
};
