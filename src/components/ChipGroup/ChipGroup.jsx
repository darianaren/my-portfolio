import React from "react";

import styles from "./styles.module.css";
import Chip from "../Chip/Chip";

const ChipGroup = ({ chips = [] }) => {
  return (
    <section className={styles.wrapper}>
      {chips.map(({ key, label }) => (
        <Chip key={key}>{label}</Chip>
      ))}
    </section>
  );
};

export default ChipGroup;
