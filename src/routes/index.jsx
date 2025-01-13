import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/Layout/Layout";

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="proyects" element={<Projects />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterConfig;
