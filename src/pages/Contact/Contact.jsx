import React from "react";

import { BUTTONS } from "./constants";
import styles from "./styles.module.css";

import Button from "../../components/Button/Button";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Contact = () => {
  const handleButtonClick =
    ({ copy, email, download, link }) =>
    () => {
      if (copy) {
        navigator.clipboard.writeText(copy);
      }

      if (email) {
        window.location.href = `mailto:${email}`;
      } else if (download) {
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.download = download;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    };

  return (
    <PageWrapper borderBlur title="Contáctame ♡">
      <div className={styles["buttons-container"]}>
        {BUTTONS.map(({ key, label, email, link, download, copy }) => (
          <Button
            key={key}
            onClick={handleButtonClick({ copy, email, download, link })}
          >
            {label}
          </Button>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Contact;
