import React from "react";

import styles from "./styles.module.css";

import { NavItem } from "./layout";
import { NAV_ITEMS } from "./constants";

const NavBar = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
