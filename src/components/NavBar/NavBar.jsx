import React, { memo, useEffect, useMemo } from "react";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";

import { NavItem } from "./layout";
import { NAV_ITEMS } from "./constants";

import { useWindowSize } from "../../context/WindowSizeContext";
import { useExitDirection } from "../../context/ExitDirectionContext";

const NavBar = memo(() => {
  const location = useLocation();
  const isMobile = useWindowSize();
  const { currentIndexPath, prevIndexPath } = useExitDirection();

  const pathsIndex = useMemo(() => NAV_ITEMS.map((item) => item.to), []);

  const path = location.pathname;
  const indexPath = useMemo(() => pathsIndex.indexOf(path), [path, pathsIndex]);

  useEffect(() => {
    localStorage.setItem("currentIndexPath", indexPath);
  }, [indexPath]);

  return (
    <header>
      <nav className={styles["nav-container"]}>
        <ul className={styles["nav-ul"]}>
          {NAV_ITEMS.map((item) => (
            <li className={styles["nav-li"]} key={item.label}>
              <NavItem
                {...item}
                prevIndex={indexPath}
                pathsIndex={pathsIndex}
              />
              <span className={styles.tooltip}>{item.label}</span>
            </li>
          ))}
          <motion.div
            className={indexPath !== -1 ? styles.indicator : "display-none"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={
              isMobile
                ? { x: prevIndexPath * 43.9 }
                : { y: prevIndexPath * 43.9 }
            }
            animate={
              isMobile
                ? { x: currentIndexPath * 43.9 }
                : { y: currentIndexPath * 43.9 }
            }
          ></motion.div>
        </ul>
      </nav>
    </header>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
