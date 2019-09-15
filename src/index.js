import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);

serviceWorker.unregister();
