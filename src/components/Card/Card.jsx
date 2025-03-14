import React from "react";

import styles from "./styles.module.css";
import ChipGroup from "../ChipGroup/ChipGroup";

const Card = ({
  title,
  image,
  labels,
  subtitle,
  description,
  orientation = "horizontal"
}) => {
  return (
    <article className={`${styles.wrapper} ${styles[orientation]}`}>
      {image ? <img className={styles.image} src={image} alt={title} /> : null}
      <div className={styles["info-container"]}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
        <ChipGroup chips={labels} />
      </div>
    </article>
  );
};

export default Card;
