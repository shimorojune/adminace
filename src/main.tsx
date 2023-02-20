import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store/store";
import { App } from "layouts/App/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { theme } from "utils/theme/theme";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import "styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <CssBaseline enableColorScheme />
      <CssVarsProvider theme={theme}>
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </CssVarsProvider>
    </Provider>
  </BrowserRouter>
);
