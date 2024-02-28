import { ToastContainer } from "react-toastify";
import { RounterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <GlobalStyles />
      <RounterMain />
    </div>
  );
};

export default App;
