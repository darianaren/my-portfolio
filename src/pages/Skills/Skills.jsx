import React from "react";

import {
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  SOFT_SKILLS,
  TECHNOLOGIES_SKILLS
} from "./constants";
import styles from "./styles.module.css";

import ChipGroup from "../../components/ChipGroup/ChipGroup";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";

const Skills = () => {
  return (
    <PageWrapper borderBlur title="Conocimientos y habilidades">
      <h2 className={styles.title}>Frontend</h2>
      <ChipGroup chips={FRONTEND_SKILLS} />

      <h2 className={styles.title}>Backend</h2>
      <ChipGroup chips={BACKEND_SKILLS} />

      <h2 className={styles.title}>Tecnologías y software</h2>
      <ChipGroup chips={TECHNOLOGIES_SKILLS} />

      <h2 className={styles.title}>Habilidades blandas</h2>
      <ChipGroup chips={SOFT_SKILLS} />
    </PageWrapper>
  );
};

export default Skills;
