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
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
});

const TRANSITION = Object.freeze({
  duration: 0.6,
  ease: "easeInOut"
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
