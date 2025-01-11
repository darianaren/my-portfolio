import React from "react";

import styles from "./styles.module.css";

import { BgShape } from "./layout";
import { BG_SHAPES } from "./constants";

const Background = () => {
  return (
    <div
      className={`
        ${styles.wrapper}
        ${styles.absolute}
        ${styles["justify-center"]}
    `}
    >
      {BG_SHAPES.map(({ id, variables, color }) => (
        <BgShape key={id} variables={variables} color={color} />
      ))}
    </div>
  );
};

export default Background;
