import React, { memo } from "react";

import styles from "./styles.module.css";

export const BgShape = memo(({ variables, color }) => {
  return (
    <div
      style={{
        "--top": variables[0].top,
        "--left": variables[0].left,
        "--width": variables[0].width,
        "--height": variables[0].height,

        "--top-25": variables[1].top,
        "--left-25": variables[1].left,
        "--width-25": variables[1].width,
        "--height-25": variables[1].height,

        "--top-50": variables[2].top,
        "--left-50": variables[2].left,
        "--width-50": variables[2].width,
        "--height-50": variables[2].height,

        "--top-75": variables[3].top,
        "--left-75": variables[3].left,
        "--width-75": variables[3].width,
        "--height-75": variables[3].height
      }}
      className={`
            ${styles[color]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
    ></div>
  );
});

BgShape.displayName = "BgShape";
