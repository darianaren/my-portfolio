import React from "react";

import styles from "./styles.module.css";

import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
