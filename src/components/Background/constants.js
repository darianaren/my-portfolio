const VARIABLES_BG_SHAPE_1 = Object.freeze({
  top: "10vh",
  left: "75vw",
  width: "15vw",
  height: "15vw"
});

const VARIABLES_BG_SHAPE_2 = Object.freeze({
  top: "85vh",
  left: "50vw",
  width: "20vw",
  height: "20vw"
});
const VARIABLES_BG_SHAPE_3 = Object.freeze({
  top: "70vh",
  left: "10vw",
  width: "25vw",
  height: "25vw"
});
const VARIABLES_BG_SHAPE_4 = Object.freeze({
  top: "-7vw",
  left: "-7vw",
  width: "30vw",
  height: "30vw"
});
const VARIABLES_BG_SHAPE_5 = Object.freeze({
  top: "60vh",
  left: "70vw",
  width: "35vw",
  height: "35vw"
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
