import React, { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import styles from "./styles.module.css";
import { SNACKBAR_VARIANTS } from "./constants";

import Portal from "../Portal/Portal";

const Snackbar = ({ message, resetSnackbar, lifeTime = 10000 }) => {
  useEffect(() => {
    const interval = setInterval(() => resetSnackbar(), lifeTime);

    return () => clearInterval(interval);
  }, [lifeTime, resetSnackbar]);

  return (
    <Portal portalId="snackbar">
      <AnimatePresence>
        {message && resetSnackbar ? (
          <motion.div
            exit="exit"
            role="alert"
            tabIndex={0}
            initial="hidden"
            animate="visible"
            onClick={resetSnackbar}
            className={styles.snackbar}
            variants={SNACKBAR_VARIANTS}
          >
            <p className={styles.message}>{message}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default Snackbar;
