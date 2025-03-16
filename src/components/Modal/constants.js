const BACKDROP_VARIANTS = Object.freeze({
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
});

const MODAL_VARIANTS = Object.freeze({
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
});

const TRANSITION = Object.freeze({
  durarion: "0.4s",
  property: "opacity scale",
  timingFunction: "linear"
});

export const BACKDROP_OPTIONS = Object.freeze({
  exit: "hidden",
  initial: "hidden",
  animate: "visible",
  transition: TRANSITION,
  variants: BACKDROP_VARIANTS
});

export const MODAL_OPTIONS = Object.freeze({
  exit: "hidden",
  initial: "hidden",
  animate: "visible",
  transition: TRANSITION,
  variants: MODAL_VARIANTS
});
