import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { PAGE_VARIANTS } from "./constants";

import { useExitDirection } from "../../context/ExitDirectionContext";
import Menu from "../../components/Menu/Menu";

const PageWrapper = ({
  fullHeight,
  borderBlur,
  title,
  menu,
  setMenu,
  children
}) => {
  const { exitDirection } = useExitDirection();

  return (
    <motion.div
      animate="animate"
      exit={exitDirection}
      variants={PAGE_VARIANTS}
      initial={exitDirection === "up" ? "down" : "up"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      {title ? <h1 className={styles.title}>{title}</h1> : null}
      {menu && setMenu ? (
        <header className={`${styles["menu-wrapper"]}`}>
          <Menu items={menu} setSelectedItem={setMenu} />
        </header>
      ) : null}
      <section
        className={`${
          menu && setMenu
            ? styles["section-menu-wrapper"]
            : styles["section-wrapper"]
        } ${borderBlur ? styles["border-blur"] : ""} ${
          fullHeight ? styles["full-height"] : ""
        }`}
      >
        {children}
      </section>
    </motion.div>
  );
};

export default PageWrapper;
