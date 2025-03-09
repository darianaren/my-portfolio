import React, { useReducer, memo } from "react";

import { reducer } from "./reducer";
import styles from "./styles.module.css";
import { ACTIONS_TYPES, INITIAL_STATE } from "./constants";

import RippleEffect from "../RippleEffect/RippleEffect";

const Button = memo(
  ({ onClick, disabled = false, isLoading = false, children = "Button" }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const effectiveDisabled = disabled || isLoading ? true : false;

    const handleButtonClick = (event) => {
      event.preventDefault();
      event.stopPropagation();

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
      <button
        tabIndex={0}
        onClick={handleButtonClick}
        disabled={effectiveDisabled}
        className={`${styles.button}`}
      >
        <RippleEffect
          coords={state.coords}
          isAnimating={state.isAnimating}
          animationKey={state.animationKey}
          onAnimationEnd={handleAnimationEnd}
        />

        <div className={styles.content}>{!isLoading ? children : "Espere"}</div>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
