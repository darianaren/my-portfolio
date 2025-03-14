import React, { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MENU_ITEMS, MENU_PAGE, PAGE_VARIANTS } from "./constants";

import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Projects = () => {
  const [exitDirection, setExitDirection] = useState("left");
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].index);

  const handleSetSelectedItem = useCallback((current) => {
    setSelectedItem((prev) => {
      const direction = prev > current ? "right" : "left";
      setExitDirection(direction);

      return current;
    });
  }, []);

  const menuPage = useMemo(() => MENU_PAGE[selectedItem], [selectedItem]);

  return (
    <PageWrapper title="Experiencia y proyectos">
      <Menu items={MENU_ITEMS} setSelectedItem={handleSetSelectedItem} />
      <div className="relative overflow-hidden">
        <AnimatePresence custom={exitDirection} mode="wait">
          <motion.div
            exit="exit"
            initial="enter"
            animate="center"
            key={selectedItem}
            custom={exitDirection}
            variants={PAGE_VARIANTS}
            transition={{ duration: 0.5 }}
          >
            {menuPage.map(
              ({ key, title, subtitle, image, description, labels }, index) => (
                <Card
                  key={key}
                  title={title}
                  image={image}
                  labels={labels}
                  subtitle={subtitle}
                  description={description}
                  divider={index !== menuPage.length - 1}
                />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default Projects;
