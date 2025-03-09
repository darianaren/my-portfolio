export const SNACKBAR_VARIANTS = Object.freeze({
  hidden: { x: "-50%", y: "100%", opacity: 0 },
  visible: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    y: "100%",
    x: "-50%",
    opacity: 0.5,
    transition: { duration: 0.5, ease: "easeIn" }
  }
});
