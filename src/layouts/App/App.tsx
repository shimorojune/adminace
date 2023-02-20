/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import "utils/i8next/i8next";
import { routes } from "utils/routes";
import { Dashboard } from "../Dashboard/Dashboard";
import styles from "./App.styles";

export const App = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Routes>
        <Route path={routes.DASHBOARD.path} element={<Dashboard />} />
      </Routes>
    </div>
  );
};
