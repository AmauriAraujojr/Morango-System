import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { SystemPage } from "../pages/SystemPage";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/systempage" element={<SystemPage/>}/>


    </Routes>
  );
};
