import React from "react";

import styles from "./styles.module.css";

import NavBar from "../../components/NavBar/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
