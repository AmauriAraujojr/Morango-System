import { ToastContainer } from "react-toastify";
import { RounterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyle";
import { MenuMobile } from "./components/Header/MenuMobile";
import { useState } from "react";

const App = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="app">
      <Header setOpenMobile={setOpenMobile} openMobile={openMobile}/>
      {openMobile ? <MenuMobile /> : null}
      <ToastContainer />
      <GlobalStyles />
      <RounterMain />
    </div>
  );
};

export default App;
