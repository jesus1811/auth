import { ContextProvider } from "./contexts/DataContext";
import RouterApp from "./routers/RouterApp";

const App = () => {
  return (
    <ContextProvider>
      <RouterApp />
    </ContextProvider>
  );
};

export default App;
