import React, { memo } from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

import { NavItem } from "./layout";
import { NAV_ITEMS } from "./constants";
import { useWindowSize } from "../../context/WindowSizeContext";
import { useExitDirection } from "../../context/ExitDirectionContext";

const NavBar = memo(() => {
  const isMobile = useWindowSize();
  const { currentIndexPath, prevIndexPath } = useExitDirection();

  return (
    <header>
      <nav className={styles["nav-container"]}>
        <ul className={styles["nav-ul"]}>
          {NAV_ITEMS.map((item) => (
            <li className={styles["nav-li"]} key={item.label}>
              <NavItem {...item} />
              <span className={styles.tooltip}>{item.label}</span>
            </li>
          ))}
          <motion.div
            className={styles.indicator}
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
