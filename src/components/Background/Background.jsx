import React from "react";
import styles from "./styles.module.css";
import {
  VARIABLES_BG_SHAPE_1,
  VARIABLES_BG_SHAPE_2,
  VARIABLES_BG_SHAPE_3,
  VARIABLES_BG_SHAPE_4,
  VARIABLES_BG_SHAPE_5
} from "./constants";

const Background = () => {
  return (
    <div
      className={`
        ${styles.wrapper}
        ${styles.absolute}
        ${styles["justify-center"]}
    `}
    >
      <div
        style={{
          "--top": VARIABLES_BG_SHAPE_1.top,
          "--left": VARIABLES_BG_SHAPE_1.left,
          "--width": VARIABLES_BG_SHAPE_1.width,
          "--height": VARIABLES_BG_SHAPE_1.height,

          "--top-25": VARIABLES_BG_SHAPE_2.top,
          "--left-25": VARIABLES_BG_SHAPE_2.left,
          "--width-25": VARIABLES_BG_SHAPE_2.width,
          "--height-25": VARIABLES_BG_SHAPE_2.height,

          "--top-50": VARIABLES_BG_SHAPE_3.top,
          "--left-50": VARIABLES_BG_SHAPE_3.left,
          "--width-50": VARIABLES_BG_SHAPE_3.width,
          "--height-50": VARIABLES_BG_SHAPE_3.height,

          "--top-75": VARIABLES_BG_SHAPE_3.top,
          "--left-75": VARIABLES_BG_SHAPE_3.left,
          "--width-75": VARIABLES_BG_SHAPE_3.width,
          "--height-75": VARIABLES_BG_SHAPE_3.height
        }}
        className={`
            ${styles["color-1"]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
      ></div>
      <div
        style={{
          "--top": VARIABLES_BG_SHAPE_2.top,
          "--left": VARIABLES_BG_SHAPE_2.left,
          "--width": VARIABLES_BG_SHAPE_2.width,
          "--height": VARIABLES_BG_SHAPE_2.height,

          "--top-25": VARIABLES_BG_SHAPE_3.top,
          "--left-25": VARIABLES_BG_SHAPE_3.left,
          "--width-25": VARIABLES_BG_SHAPE_3.width,
          "--height-25": VARIABLES_BG_SHAPE_3.height,

          "--top-50": VARIABLES_BG_SHAPE_4.top,
          "--left-50": VARIABLES_BG_SHAPE_4.left,
          "--width-50": VARIABLES_BG_SHAPE_4.width,
          "--height-50": VARIABLES_BG_SHAPE_4.height,

          "--top-75": VARIABLES_BG_SHAPE_5.top,
          "--left-75": VARIABLES_BG_SHAPE_5.left,
          "--width-75": VARIABLES_BG_SHAPE_5.width,
          "--height-75": VARIABLES_BG_SHAPE_5.height
        }}
        className={`
            ${styles["color-2"]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
      ></div>
      <div
        style={{
          "--top": VARIABLES_BG_SHAPE_3.top,
          "--left": VARIABLES_BG_SHAPE_3.left,
          "--width": VARIABLES_BG_SHAPE_3.width,
          "--height": VARIABLES_BG_SHAPE_3.height,

          "--top-25": VARIABLES_BG_SHAPE_4.top,
          "--left-25": VARIABLES_BG_SHAPE_4.left,
          "--width-25": VARIABLES_BG_SHAPE_4.width,
          "--height-25": VARIABLES_BG_SHAPE_4.height,

          "--top-50": VARIABLES_BG_SHAPE_5.top,
          "--left-50": VARIABLES_BG_SHAPE_5.left,
          "--width-50": VARIABLES_BG_SHAPE_5.width,
          "--height-50": VARIABLES_BG_SHAPE_5.height,

          "--top-75": VARIABLES_BG_SHAPE_1.top,
          "--left-75": VARIABLES_BG_SHAPE_1.left,
          "--width-75": VARIABLES_BG_SHAPE_1.width,
          "--height-75": VARIABLES_BG_SHAPE_1.height
        }}
        className={`
            ${styles["color-3"]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
      ></div>
      <div
        style={{
          "--top": VARIABLES_BG_SHAPE_4.top,
          "--left": VARIABLES_BG_SHAPE_4.left,
          "--width": VARIABLES_BG_SHAPE_4.width,
          "--height": VARIABLES_BG_SHAPE_4.height,

          "--top-25": VARIABLES_BG_SHAPE_5.top,
          "--left-25": VARIABLES_BG_SHAPE_5.left,
          "--width-25": VARIABLES_BG_SHAPE_5.width,
          "--height-25": VARIABLES_BG_SHAPE_5.height,

          "--top-50": VARIABLES_BG_SHAPE_1.top,
          "--left-50": VARIABLES_BG_SHAPE_1.left,
          "--width-50": VARIABLES_BG_SHAPE_1.width,
          "--height-50": VARIABLES_BG_SHAPE_1.height,

          "--top-75": VARIABLES_BG_SHAPE_2.top,
          "--left-75": VARIABLES_BG_SHAPE_2.left,
          "--width-75": VARIABLES_BG_SHAPE_2.width,
          "--height-75": VARIABLES_BG_SHAPE_2.height
        }}
        className={`
            ${styles["color-4"]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
      ></div>
      <div
        style={{
          "--top": VARIABLES_BG_SHAPE_5.top,
          "--left": VARIABLES_BG_SHAPE_5.left,
          "--width": VARIABLES_BG_SHAPE_5.width,
          "--height": VARIABLES_BG_SHAPE_5.height,

          "--top-25": VARIABLES_BG_SHAPE_1.top,
          "--left-25": VARIABLES_BG_SHAPE_1.left,
          "--width-25": VARIABLES_BG_SHAPE_1.width,
          "--height-25": VARIABLES_BG_SHAPE_1.height,

          "--top-50": VARIABLES_BG_SHAPE_2.top,
          "--left-50": VARIABLES_BG_SHAPE_2.left,
          "--width-50": VARIABLES_BG_SHAPE_2.width,
          "--height-50": VARIABLES_BG_SHAPE_2.height,

          "--top-75": VARIABLES_BG_SHAPE_3.top,
          "--left-75": VARIABLES_BG_SHAPE_3.left,
          "--width-75": VARIABLES_BG_SHAPE_3.width,
          "--height-75": VARIABLES_BG_SHAPE_3.height
        }}
        className={`
            ${styles["color-5"]}
            ${styles["bg-blur"]}
            ${styles["bg-shape"]}
        `}
      ></div>
    </div>
  );
};

export default Background;
