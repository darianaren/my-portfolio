import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { PAGE_VARIANTS } from "./constants";

import { useExitDirection } from "../../context/ExitDirectionContext";

const PageWrapper = ({ borderBlur, title, children }) => {
  const { exitDirection } = useExitDirection();

  return (
    <motion.div
      animate="animate"
      exit={exitDirection}
      variants={PAGE_VARIANTS}
      style={{ position: "absolute", width: "100%" }}
      initial={exitDirection === "up" ? "down" : "up"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {title ? <h1>{title}</h1> : null}
      <section className={borderBlur ? styles["border-blur"] : ""}>
        {children}
      </section>
    </motion.div>
  );
};

export default PageWrapper;
