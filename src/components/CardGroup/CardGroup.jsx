import React from "react";

import styles from "./styles.module.css";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";

const CardGroup = ({ divider, cards = [], orientation = "horizontal" }) => {
  if (!cards.length) return null;

  return (
    <section
      className={`${styles.wrapper} ${orientation ? styles[orientation] : ""}`}
    >
      {cards.map(({ key, ...data }, index) => (
        <div key={key} className={styles.card}>
          <Card orientation={orientation} {...data} />
          {divider && index !== cards.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </section>
  );
};

export default CardGroup;
