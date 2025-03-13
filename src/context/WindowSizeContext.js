import { createContext, useState, useEffect, useContext } from "react";

const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const checkIsMobile = () => {
    return (
      window.innerWidth < 1000 ||
      window.matchMedia("(orientation: portrait)").matches
    );
  };

  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={isMobile}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => useContext(WindowSizeContext);
