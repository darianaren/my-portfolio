import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export const NavItem = ({ to, icon, label, isExternal, download }) => {
  if (isExternal) {
    return (
      <a href={to} download={download} className={styles.inactive}>
        <img width={20} height={20} src={icon} alt={label} className="icon" />
      </a>
    );
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
