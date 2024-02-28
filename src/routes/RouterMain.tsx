import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
};
