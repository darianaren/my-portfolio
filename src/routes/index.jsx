import React, { useEffect, useState } from "react";

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
import NavBar from "../components/NavBar/NavBar";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";
import AppLayout from "../templates/AppLayout/AppLayout";
import AnimatedIntro from "../components/AnimatedIntro/AnimatedIntro ";

const AnimatedRoutes = () => {
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              showIntro ? (
                <AnimatedIntro key="intro" />
              ) : (
                <AppLayout>
                  <Outlet />
                </AppLayout>
              )
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
    </>
  );
};

const RouterConfig = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default RouterConfig;
