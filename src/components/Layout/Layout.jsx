import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
