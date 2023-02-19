import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./layouts/App/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider resetCSS>
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
