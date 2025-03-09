import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { PAGE_VARIANTS } from "./constants";

const PageWrapper = ({ borderBlur, title, children }) => {
  return (
    <motion.div
      exit="exit"
      initial="enter"
      animate="animate"
      variants={PAGE_VARIANTS}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }}
    >
      {title ? <h1>{title}</h1> : null}
      <section className={borderBlur ? styles["border-blur"] : ""}>
        {children}
      </section>
    </motion.div>
  );
};

export default PageWrapper;
