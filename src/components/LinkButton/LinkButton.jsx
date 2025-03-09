import React, { useReducer, memo } from "react";

import { Link } from "react-router-dom";

import { reducer } from "./reducer";
import styles from "./styles.module.css";
import { ACTIONS_TYPES, INITIAL_STATE } from "./constants";

import RippleEffect from "../RippleEffect/RippleEffect";

const LinkButton = memo(
  ({
    to,
    onClick,
    disabled = false,
    isLoading = false,
    children = "Link Button"
  }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const effectiveDisabled = disabled || isLoading ? true : false;

    const handleButtonClick = (event) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return null;
      }

      const { currentTarget, clientX, clientY } = event;

      const rect = currentTarget?.getBoundingClientRect();

      if (clientX && clientY && rect)
        dispatch({
          type: ACTIONS_TYPES.CLICK,
          payload: { clientX, clientY, rect }
        });

      if (onClick) onClick(event);
    };

    const handleAnimationEnd = () => {
      dispatch({ type: ACTIONS_TYPES.ANIMATION_END });
    };

    return (
      <Link
        to={to}
        tabIndex={0}
        onClick={handleButtonClick}
        className={`${styles.button} ${
          effectiveDisabled ? styles.disabled : ""
        }`}
      >
        <RippleEffect
          coords={state.coords}
          isAnimating={state.isAnimating}
          animationKey={state.animationKey}
          onAnimationEnd={handleAnimationEnd}
        />

        <div className={styles.content}>{!isLoading ? children : "Espere"}</div>
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
