import { createContext, useContext, useState } from "react";

const ExitDirectionContext = createContext();

export const ExitDirectionProvider = ({ children }) => {
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <ExitDirectionContext.Provider value={{ exitDirection, setExitDirection }}>
      {children}
    </ExitDirectionContext.Provider>
  );
};

export const useExitDirection = () => useContext(ExitDirectionContext);
