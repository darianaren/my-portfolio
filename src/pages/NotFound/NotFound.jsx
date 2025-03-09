import React from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";

import LinkButton from "../../components/LinkButton/LinkButton";

const NotFound = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.wrapper}
    >
      <h1 className={styles.title}>
        <span className={styles["span-title"]}>404</span> | PÁGINA NO ENCONTRADA
      </h1>
      <LinkButton to="/">VOLVER</LinkButton>
    </motion.div>
  );
};

export default NotFound;
