import { ToastContainer } from "react-toastify";
import { RounterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyle";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

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
