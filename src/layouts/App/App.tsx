import i18next from "i18next";
import { Auth } from "layouts/Auth/Auth";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppState, updateAppLanguage } from "store/appSlice";
import { useAppDispatch } from "store/hooks";
import { routes } from "utils/routes";
import { Dashboard } from "../Dashboard/Dashboard";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { AppLoaderPage } from "pages/App/AppLoader/AppLoaderPage";
import styles from "./App.styles";
import "utils/i8next/i8next";

export const App = () => {
  // HOOKS
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // STATE
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // VARIABLES
  const auth = getAuth();

  // HANDLERS
  const onAuthStateChangedHandler = (user: User | null) => {
    if (!!user) {
      setIsAppLoaded(true);
      navigate(routes.DASHBOARD.navigatePath, {
        replace: true,
      });
    } else {
      navigate(routes.AUTH.navigatePath, {
        replace: true,
      });
      setIsAppLoaded(true);
    }
  };

  // EFFECTS
  useEffect(() => {
    /**
     * Even if the language memory in local-storage is managed by i18next,
     * the app is not aware of the language until the store is updated
     * (eg. The langugage selector dropdown)
     */
    dispatch(updateAppLanguage(i18next.language as AppState["language"]));
    /**
     * Setting up auth listeners to redirect users to auth route if not logged in
     */
    const unSubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
    return () => {
      unSubscribe();
    };
  }, []);

  // DRAW
  return (
    <div css={styles.container.style}>
      {isAppLoaded ? (
        <Routes>
          <Route path={routes.AUTH.path} element={<Auth />} />
          <Route index element={<Dashboard />} />
        </Routes>
      ) : (
        <AppLoaderPage />
      )}
    </div>
  );
};
