import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { PAGE_VARIANTS } from "./constants";

import { useExitDirection } from "../../context/ExitDirectionContext";

const PageWrapper = ({ fullHeight, borderBlur, title, children }) => {
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
      <section
        className={`${styles["section-wrapper"]} ${
          borderBlur ? styles["border-blur"] : ""
        } ${fullHeight ? styles["full-height"] : ""}`}
      >
        {children}
      </section>
    </motion.div>
  );
};

export default PageWrapper;
