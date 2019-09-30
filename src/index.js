import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
