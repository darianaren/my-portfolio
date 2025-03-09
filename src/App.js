import Background from "./components/Background/Background";
import { ExitDirectionProvider } from "./context/ExitDirectionContext";
import RouterConfig from "./routes";

function App() {
  return (
    <ExitDirectionProvider>
      <Background />
      <RouterConfig />
    </ExitDirectionProvider>
  );
}

export default App;
