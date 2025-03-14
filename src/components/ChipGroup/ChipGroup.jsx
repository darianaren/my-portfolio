import React from "react";

import styles from "./styles.module.css";
import Chip from "../Chip/Chip";

const ChipGroup = ({ chips = [], padding }) => {
  if (!chips.length) return null;

  return (
    <section className={`${styles.wrapper} ${padding ? styles.padding : ""}`}>
      {chips.map(({ key, label }) => (
        <Chip key={key}>{label}</Chip>
      ))}
    </section>
  );
};

export default ChipGroup;
