import React from "react";

import styles from "./styles.module.css";
import ChipGroup from "../ChipGroup/ChipGroup";
import Divider from "../Divider/Divider";

const Card = ({ title, subtitle, image, description, labels, divider }) => {
  return (
    <>
      <article className={styles.wrapper}>
        {image ? (
          <img className={styles.image} src={image} alt={title} />
        ) : null}
        <div>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <p className={styles.description}>{description}</p>
          <ChipGroup chips={labels} />
        </div>
      </article>
      {divider ? <Divider /> : null}
    </>
  );
};

export default Card;
