import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

const FlipImage = ({ frontImage, backImage }) => {
  return (
    <motion.div
      animate={{
        rotateY: [0, 0, 180, 180, 360, 360]
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        times: [0, 0.15, 0.35, 0.65, 0.85, 1]
      }}
      style={{
        height: "auto",
        width: "min-content",
        position: "relative",
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.img
        src={frontImage}
        alt="Frontal"
        className={styles.image}
        style={{
          visibility: "hidden"
        }}
      />
      <motion.img
        src={frontImage}
        alt="Frontal"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          backfaceVisibility: "hidden"
        }}
      />

      <motion.img
        src={backImage}
        alt="Trasera"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden"
        }}
      />
    </motion.div>
  );
};

export default FlipImage;
