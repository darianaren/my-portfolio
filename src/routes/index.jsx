import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";
import AppLayout from "../templates/AppLayout/AppLayout";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const RouterConfig = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default RouterConfig;
