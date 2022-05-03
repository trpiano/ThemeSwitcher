import React from "react";
import { ClearCacheProvider } from "react-clear-cache";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <ClearCacheProvider duration={1}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClearCacheProvider>,
  document.getElementById("root")
);
