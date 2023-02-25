import i18next from "i18next";
import { Auth } from "layouts/Auth/Auth";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppState, updateAppLanguage } from "store/appSlice";
import { useAppDispatch } from "store/hooks";
import "utils/i8next/i8next";
import { routes } from "utils/routes";
import { Dashboard } from "../Dashboard/Dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import styles from "./App.styles";
import { AppLoaderPage } from "pages/App/AppLoader/AppLoaderPage";

export const App = () => {
  // HOOKS
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // STATE
  const [isAppLoading, setIsAppLoading] = useState(true);

  // VARIABLES
  const auth = getAuth();

  // EFFECTS
  useEffect(() => {
    /**
     * Even if the language memory in local-storage is managed by i18next,
     * the app is not aware of the language until the store is updated
     * (eg. The langugage selector dropdown)
     */
    dispatch(updateAppLanguage(i18next.language as AppState["language"]));
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (!!user) {
        setIsAppLoading(false);
      } else {
        navigate(routes.AUTH.navigatePath, {
          replace: true,
        });
        setIsAppLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // DRAW
  return (
    <div css={styles.container.style}>
      {isAppLoading ? (
        <AppLoaderPage />
      ) : (
        <Routes>
          <Route path={routes.AUTH.path} element={<Auth />} />
          <Route index element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
};
