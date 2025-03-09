export const ACTIONS_TYPES = {
  CLICK: Symbol("Click action"),
  ANIMATION_END: Symbol("Animation end action")
};

export const INITIAL_STATE = {
  coords: { x: 0, y: 0 },
  isAnimating: false,
  animationKey: 0
};
