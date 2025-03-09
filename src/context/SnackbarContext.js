import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo
} from "react";
import Snackbar from "../components/Snackbar/Snackbar";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarInfo, setSnackbarInfo] = useState("");

  const resetSnackbar = useCallback(() => setSnackbarInfo(""), []);

  const showSnackbar = useCallback((message) => {
    setSnackbarInfo(message);
  }, []);

  const contextValue = useMemo(
    () => ({
      showSnackbar
    }),
    [showSnackbar]
  );
  return (
    <SnackbarContext.Provider value={contextValue}>
      <Snackbar resetSnackbar={resetSnackbar} message={snackbarInfo} />
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
