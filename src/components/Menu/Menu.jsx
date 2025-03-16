import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { useWindowSize } from "../../context/WindowSizeContext";

const Menu = memo(({ items, setSelectedItem }) => {
  const liRefs = useRef([]);
  const isMobile = useWindowSize();

  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    if (liRefs.current[0]) {
      setIndicatorX(liRefs.current[0].offsetLeft);
      setIndicatorWidth(liRefs.current[0].offsetWidth);
    }
  }, []);

  const handleSetSelectedItem = useCallback(
    (index) => () => {
      setSelectedItem(index);
      if (liRefs.current[index]) {
        setIndicatorX(liRefs.current[index].offsetLeft);
        setIndicatorWidth(liRefs.current[index].offsetWidth);
      }
    },
    [liRefs, setSelectedItem]
  );

  return (
    <nav className={styles.wrapper}>
      <ul className={styles["ul-items-container"]}>
        {items.map(({ index, key, label }) => (
          <li
            key={key}
            ref={(el) => (liRefs.current[index] = el)}
            className={styles["li-items"]}
            onClick={handleSetSelectedItem(index)}
          >
            {label}
          </li>
        ))}
        <motion.div
          initial={
            isMobile
              ? { x: indicatorX - 5, width: indicatorWidth + 10 }
              : { x: indicatorX - 16, width: indicatorWidth + 29 }
          }
          animate={
            isMobile
              ? { x: indicatorX - 5, width: indicatorWidth + 10 }
              : { x: indicatorX - 16, width: indicatorWidth + 29 }
          }
          className={styles.indicator}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </ul>
    </nav>
  );
});

Menu.displayName = "Menu";

export default Menu;
