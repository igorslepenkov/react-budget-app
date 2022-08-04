import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvidersCombiner } from "./context/AppProvidersCombiner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvidersCombiner>
      <App />
    </AppProvidersCombiner>
  </React.StrictMode>
);
