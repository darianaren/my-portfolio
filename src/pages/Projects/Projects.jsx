import React, { useCallback, useState } from "react";

import { MENU_ITEMS } from "./constants";

import Menu from "../../components/Menu/Menu";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Projects = () => {
  const [exitDirection, setExitDirection] = useState("left");
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].index);

  const handleSetSelectedItem = useCallback(
    (current) => {
      setSelectedItem((prev) => {
        const direction = prev > current ? "rigth" : "left";
        setExitDirection(direction);

        return current;
      });
    },
    [setSelectedItem, setExitDirection]
  );

  return (
    <PageWrapper title="Experiencia y proyectos">
      <Menu items={MENU_ITEMS} setSelectedItem={handleSetSelectedItem} />
    </PageWrapper>
  );
};

export default Projects;
