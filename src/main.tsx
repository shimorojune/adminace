import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { App } from "layouts/App/App";
import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store/store";
import { theme } from "utils/theme/theme";
import "./services/firebase/firebase";
import "styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* replacement for <ThemeProvider /> since we also want the CSS variables in DOM */}
      <CssVarsProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline enableColorScheme />
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </SnackbarProvider>
      </CssVarsProvider>
    </Provider>
  </BrowserRouter>
);
