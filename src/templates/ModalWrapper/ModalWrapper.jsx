import React from "react";

import styles from "./styles.module.css";

const ModalWrapper = ({ borderBlur, title, children }) => {
  return (
    <section className={borderBlur ? styles["border-blur"] : ""}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </section>
  );
};

export default ModalWrapper;
