import React, { memo, useCallback, useEffect } from "react";

import parse from "html-react-parser";
import { motion, AnimatePresence } from "framer-motion";

import Portal from "../Portal/Portal";
import ChipGroup from "../ChipGroup/ChipGroup";
import codeIcon from "../../assets/icons/code.svg";
import arrowButton from "../../assets/icons/arrow.svg";
import deployIcon from "../../assets/icons/deploy.svg";

import styles from "./styles.module.css";
import { BACKDROP_OPTIONS, MODAL_OPTIONS } from "./constants";

const Modal = memo(
  ({
    title,
    image,
    video,
    deploy,
    github,
    onClose,
    knowledge,
    techStack,
    description,
    KeyAccomplishments,
    id = "modal",
    isOpen = false
  }) => {
    const idTitle = `${id}-${title}`;

    const containerHandler = useCallback(
      (event) => {
        const target = event.target;
        const isModalBackground = target.id === "backdrop";

        if (!isModalBackground) return;

        if (onClose) onClose();
      },
      [onClose]
    );

    const handleClose = useCallback(() => onClose && onClose(), [onClose]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height =
          "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))";

        const modal = document.getElementById(idTitle);
        modal && modal.focus();
      } else {
        document.body.style.overflow = "";
        document.body.style.height = "";
      }

      return () => {
        document.body.style.overflow = "";
        document.body.style.height = "";
      };
    }, [idTitle, isOpen]);

    return (
      <Portal portalId={id}>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              role="dialog"
              id="backdrop"
              tabIndex={-1}
              aria-labelledby={idTitle}
              onClick={containerHandler}
              className={styles.backdrop}
              {...BACKDROP_OPTIONS}
            >
              <motion.div className={styles.modal} {...MODAL_OPTIONS}>
                <img
                  width={30}
                  height={30}
                  className="icon"
                  src={arrowButton}
                  alt="Cerrar Modal"
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                />

                <header className={styles.header}>
                  <h2>{title}</h2>

                  {deploy || github ? (
                    <div className={styles["icons-container"]}>
                      {github ? (
                        <a href={github} target="_blank" rel="noreferrer">
                          <img
                            width={20}
                            height={20}
                            className="icon"
                            src={codeIcon}
                            alt="Ver código"
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                      ) : null}
                      {deploy ? (
                        <a href={deploy} target="_blank" rel="noreferrer">
                          <img
                            width={20}
                            height={20}
                            className="icon"
                            src={deployIcon}
                            alt="Ir a la página"
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </header>

                {image ? (
                  <img width="100%" height="auto" src={image} alt={title} />
                ) : null}
                {video ? (
                  <video width="100%" height="auto" controls autoPlay>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : null}

                <p style={{ margin: "1rem 0" }}>{parse(description)}</p>

                {KeyAccomplishments ? (
                  <>
                    <h3 style={{ margin: "2rem 0 1rem 0" }}>
                      Logros principales:
                    </h3>
                    <ul className={styles["ul-items-container"]}>
                      {KeyAccomplishments.map((text) => (
                        <li key={text} style={{ cursor: "default" }}>
                          {parse(text)}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {techStack ? (
                  <>
                    <h3 style={{ margin: "2rem 0 1rem 0" }}>Tecnologías:</h3>
                    <ChipGroup chips={techStack} padding />
                  </>
                ) : null}

                {knowledge ? (
                  <>
                    <h3 style={{ margin: "2rem 0 1rem 0" }}>Conocimientos:</h3>
                    <ChipGroup chips={knowledge} padding />
                  </>
                ) : null}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Portal>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
