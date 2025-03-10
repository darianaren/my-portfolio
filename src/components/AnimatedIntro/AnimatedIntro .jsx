import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

const AnimatedIntro = () => {
  return (
    <main className={styles.wrapper}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className={styles.intro}
      >
        <h1 className={styles.title}>
          <span className={styles["span-title"]}>Dariana Rengifo</span> | FULL
          STACK DEVELOPER
        </h1>
      </motion.div>
    </main>
  );
};

export default AnimatedIntro;
