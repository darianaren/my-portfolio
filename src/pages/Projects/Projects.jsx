import React, { useCallback, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { MENU_ITEMS, MENU_PAGE, PAGE_VARIANTS } from "./constants";

import Menu from "../../components/Menu/Menu";
import CardGroup from "../../components/CardGroup/CardGroup";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";
import Modal from "../../components/Modal/Modal";

const Projects = () => {
  const [exitDirection, setExitDirection] = useState("left");
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].index);
  const [modal, setModal] = useState({ isOpen: false, data: {} });

  const handleSetSelectedItem = useCallback((current) => {
    setSelectedItem((prev) => {
      const direction = prev > current ? "right" : "left";
      setExitDirection(direction);

      return current;
    });
  }, []);

  const handleOpenModal = useCallback((data) => {
    setModal({ isOpen: true, data });
  }, []);
  const handleCloseModal = useCallback(() => {
    setModal({ isOpen: false, data: {} });
  }, []);

  const { menuPage, divider, orientation } = useMemo(
    () => MENU_PAGE(handleOpenModal)[selectedItem],
    [selectedItem, handleOpenModal]
  );

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
            <CardGroup
              cards={menuPage}
              divider={divider}
              orientation={orientation}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Modal isOpen={modal.isOpen} {...modal.data} onClose={handleCloseModal} />
    </PageWrapper>
  );
};

export default Projects;
