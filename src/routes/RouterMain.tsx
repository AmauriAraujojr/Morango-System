import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { About } from "../pages/About";
import { SystemPage } from "../pages/SystemPage";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/systempage" element={<SystemPage/>}/>
      <Route path="/about" element={<About/>}/>


    </Routes>
  );
};
