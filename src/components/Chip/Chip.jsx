import React from "react";

import styles from "./styles.module.css";

const Chip = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};

export default Chip;
