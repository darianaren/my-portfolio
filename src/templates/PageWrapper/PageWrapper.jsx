import React from "react";

import styles from "./styles.module.css";

const PageWrapper = ({ borderBlur, title, children }) => {
  return (
    <>
      {title ? <h1>{title}</h1> : null}
      <section className={borderBlur ? styles["border-blur"] : ""}>
        {children}
      </section>
    </>
  );
};

export default PageWrapper;
