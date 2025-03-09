import RouterConfig from "./routes";
import Background from "./components/Background/Background";

import { SnackbarProvider } from "./context/SnackbarContext";
import { WindowSizeProvider } from "./context/WindowSizeContext";
import { ExitDirectionProvider } from "./context/ExitDirectionContext";

function App() {
  return (
    <ExitDirectionProvider>
      <WindowSizeProvider>
        <SnackbarProvider>
          <Background />
          <RouterConfig />
        </SnackbarProvider>
      </WindowSizeProvider>
    </ExitDirectionProvider>
  );
}

export default App;
