import RouterConfig from "./routes";
import Background from "./components/Background/Background";
import { WindowSizeProvider } from "./context/WindowSizeContext";
import { ExitDirectionProvider } from "./context/ExitDirectionContext";

function App() {
  return (
    <ExitDirectionProvider>
      <WindowSizeProvider>
        <Background />
        <RouterConfig />
      </WindowSizeProvider>
    </ExitDirectionProvider>
  );
}

export default App;
