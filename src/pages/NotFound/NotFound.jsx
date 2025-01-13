import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
