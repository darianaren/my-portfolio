import React from "react";

import styles from "./styles.module.css";

const Chip = ({ text }) => {
  return <label className={styles.label}>{text}</label>;
};

export default Chip;
