import React from "react";

import { BUTTONS } from "./constants";
import styles from "./styles.module.css";

import Button from "../../components/Button/Button";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Contact = () => {
  const copyText = (text) => () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <PageWrapper borderBlur title="Contáctame ♡">
      <div className={styles["buttons-container"]}>
        {BUTTONS.map(({ key, label, email, link, download, copy }) => (
          <Button key={key} onClick={copy ? copyText(copy) : null}>
            {email ? (
              <a className={styles.link} href={`mailto:${email}`}>
                {label}
              </a>
            ) : download ? (
              <a className={styles.link} href={link} download={download}>
                {label}
              </a>
            ) : link ? (
              <a
                href={link}
                target="_blank"
                className={styles.link}
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : null}
          </Button>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Contact;
