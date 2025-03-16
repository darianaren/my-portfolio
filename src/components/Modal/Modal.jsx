import React, { memo, useCallback, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Portal from "../Portal/Portal";
import arrowButton from "../../assets/icons/arrow.svg";

import styles from "./styles.module.css";
import { BACKDROP_OPTIONS, MODAL_OPTIONS } from "./constants";

const Modal = memo(
  ({
    title,
    image,
    video,
    onClose,
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
        document.body.style.height = "100vh";

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

                <h2 className={styles.title}>{title}</h2>

                {image ? (
                  <img width="100%" height="auto" src={image} alt={title} />
                ) : null}
                {video ? (
                  <video width="100%" height="auto" controls autoPlay>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
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
