import i18next from "i18next";
import { Auth } from "layouts/Auth/Auth";
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
    /**
     * Even if the language memory in local-storage is managed by i18next,
     * the app is not aware of the language until the store is updated
     * (eg. The langugage selector dropdown)
     */
    dispatch(updateAppLanguage(i18next.language as AppState["language"]));
  }, []);

  // DRAW
  return (
    <div css={styles.container}>
      <Routes>
        <Route path={routes.DASHBOARD.path} element={<Dashboard />} />
        <Route path={routes.AUTH.path} element={<Auth />} />
      </Routes>
    </div>
  );
};
