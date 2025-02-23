import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export const NavItem = ({ to, icon, label, isExternal, download }) => {
  if (isExternal) {
    return (
      <a href={to} download={download}>
        <img
          width={20}
          height={20}
          className={`icon ${styles["nav-link-icon"]}`}
          src={icon}
          alt={label}
        />
      </a>
    );
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavLink to={to} onClick={handleScrollTop} activeClassName={styles.active}>
      <img
        width={20}
        height={20}
        className={`icon ${styles["nav-link-icon"]}`}
        src={icon}
        alt={label}
      />
    </NavLink>
  );
};
