/** @jsxImportSource @emotion/react */
import i18next from "i18next";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppState, updateAppLanguage } from "store/appSlice";
import { useAppDispatch } from "store/hooks";
import "utils/i8next/i8next";
import { routes } from "utils/routes";
import { Dashboard } from "../Dashboard/Dashboard";
import styles from "./App.styles";

export const App = () => {
  // HOOKS
  const dispatch = useAppDispatch();

  // EFFECTS
  useEffect(() => {
    dispatch(updateAppLanguage(i18next.language as AppState["language"]));
  }, []);

  // DRAW
  return (
    <div css={styles.container}>
      <Routes>
        <Route path={routes.DASHBOARD.path} element={<Dashboard />} />
      </Routes>
    </div>
  );
};
