import React, { useCallback, useMemo } from "react";

import { useLocation } from "react-router-dom";

import { downloadCv } from "./utils";
import styles from "./styles.module.css";

import nameMobile from "../../assets/images/name-mobile.svg";
import nameDesktop from "../../assets/images/name-desktop.svg";
import homeImageOne from "../../assets/images/image-home-1.png";
import homeImageTwo from "../../assets/images/image-home-2.png";
import { useExitDirection } from "../../context/ExitDirectionContext";

import Button from "../../components/Button/Button";
import FlipImage from "../../components/FlipImage/FlipImage";
import { NAV_ITEMS } from "../../components/NavBar/constants";
import LinkButton from "../../components/LinkButton/LinkButton";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Home = () => {
  const location = useLocation();
  const { setExitDirection, setCurrentIndexPath, setPrevIndexPath } =
    useExitDirection();

  const pathsIndex = useMemo(() => NAV_ITEMS.map((item) => item.to), []);

  const prevPath = location.pathname;
  const prevIndex = useMemo(
    () => pathsIndex.indexOf(prevPath),
    [prevPath, pathsIndex]
  );
  const currentIndex = useMemo(
    () => pathsIndex.indexOf("/contact"),
    [pathsIndex]
  );

  const onClickLink = useCallback(() => {
    setExitDirection("up");
    setPrevIndexPath(prevIndex);
    setCurrentIndexPath(currentIndex);
  }, [
    prevIndex,
    currentIndex,
    setExitDirection,
    setPrevIndexPath,
    setCurrentIndexPath
  ]);
  return (
    <PageWrapper fullHeight>
      <div className={styles.wrapper}>
        <section className={styles["title-container"]}>
          <picture className={styles["image-title"]}>
            <source srcSet={nameDesktop} media="(min-width: 1030px)" />
            <img
              src={nameMobile}
              alt="Full stack developer - Dariana Rengifo"
            />
          </picture>

          <div className={styles.buttons}>
            <Button onClick={downloadCv}>Descargar CV</Button>
            <LinkButton to="/contact" onClick={onClickLink}>
              Contáctame
            </LinkButton>
          </div>
        </section>

        <FlipImage frontImage={homeImageOne} backImage={homeImageTwo} />
      </div>
    </PageWrapper>
  );
};

export default Home;
