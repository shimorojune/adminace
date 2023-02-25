import { LoginPage } from "pages/Auth/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";

export const Auth = () => {
  // DRAW
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
};
