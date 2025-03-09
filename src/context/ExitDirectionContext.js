import { createContext, useContext, useState } from "react";

const ExitDirectionContext = createContext();

export const ExitDirectionProvider = ({ children }) => {
  const [exitDirection, setExitDirection] = useState("up");
  const [prevIndexPath, setPrevIndexPath] = useState(0);
  const [currentIndexPath, setCurrentIndexPath] = useState(0);

  return (
    <ExitDirectionContext.Provider
      value={{
        exitDirection,
        setExitDirection,
        prevIndexPath,
        setPrevIndexPath,
        currentIndexPath,
        setCurrentIndexPath
      }}
    >
      {children}
    </ExitDirectionContext.Provider>
  );
};

export const useExitDirection = () => useContext(ExitDirectionContext);
