import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Loggin";
import { HomePage } from "../pages/Home";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
