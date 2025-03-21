const VARIABLES_BG_SHAPE_1 = Object.freeze({
  top: "10dvh",
  left: "75dvw",
  width: "15dvw",
  height: "15dvw"
});

const VARIABLES_BG_SHAPE_2 = Object.freeze({
  top: "85dvh",
  left: "50dvw",
  width: "20dvw",
  height: "20dvw"
});
const VARIABLES_BG_SHAPE_3 = Object.freeze({
  top: "70dvh",
  left: "10dvw",
  width: "25dvw",
  height: "25dvw"
});
const VARIABLES_BG_SHAPE_4 = Object.freeze({
  top: "-7dvw",
  left: "-7dvw",
  width: "30dvw",
  height: "30dvw"
});
const VARIABLES_BG_SHAPE_5 = Object.freeze({
  top: "60dvh",
  left: "70dvw",
  width: "35dvw",
  height: "35dvw"
});

export const BG_SHAPES = Object.freeze([
  {
    id: "bg-shape-1",
    color: "color-1",
    variables: [
      VARIABLES_BG_SHAPE_1,
      VARIABLES_BG_SHAPE_2,
      VARIABLES_BG_SHAPE_3,
      VARIABLES_BG_SHAPE_4
    ]
  },
  {
    id: "bg-shape-2",
    color: "color-2",
    variables: [
      VARIABLES_BG_SHAPE_2,
      VARIABLES_BG_SHAPE_3,
      VARIABLES_BG_SHAPE_4,
      VARIABLES_BG_SHAPE_5
    ]
  },
  {
    id: "bg-shape-3",
    color: "color-3",
    variables: [
      VARIABLES_BG_SHAPE_3,
      VARIABLES_BG_SHAPE_4,
      VARIABLES_BG_SHAPE_5,
      VARIABLES_BG_SHAPE_1
    ]
  },
  {
    id: "bg-shape-4",
    color: "color-4",
    variables: [
      VARIABLES_BG_SHAPE_4,
      VARIABLES_BG_SHAPE_5,
      VARIABLES_BG_SHAPE_1,
      VARIABLES_BG_SHAPE_2
    ]
  },
  {
    id: "bg-shape-5",
    color: "color-5",
    variables: [
      VARIABLES_BG_SHAPE_5,
      VARIABLES_BG_SHAPE_1,
      VARIABLES_BG_SHAPE_2,
      VARIABLES_BG_SHAPE_3
    ]
  }
]);
