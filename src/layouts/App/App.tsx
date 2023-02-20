/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { SideNav } from "../../components/SideNav/SideNav";
import "../../utils/i8next/i8next";
import { routes } from "../../utils/routes";
import { DashboardLayout } from "../Dashboard/Dashboard";
import styles from "./App.styles";

export const App = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Routes>
        <Route path={routes.DASHBOARD.path} element={<DashboardLayout />} />
      </Routes>
    </div>
  );
};
