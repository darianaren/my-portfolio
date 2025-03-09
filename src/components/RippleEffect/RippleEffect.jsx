import React, { memo } from "react";

import styles from "./styles.module.css";

const RippleEffect = memo(
  ({ animationKey, isAnimating, coords, onAnimationEnd }) => {
    return (
      <div className={styles.ripple}>
        <span
          key={animationKey}
          className={`${styles["ripple-circle"]} ${
            isAnimating ? styles["is-active"] : ""
          }`}
          style={{
            top: `${coords.y}px`,
            left: `${coords.x}px`
          }}
          onAnimationEnd={onAnimationEnd}
        />
      </div>
    );
  }
);

RippleEffect.displayName = "RippleEffect";

export default RippleEffect;
