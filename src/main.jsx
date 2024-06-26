import React from "react";

import ReactDOM from "react-dom/client";
// redux Toolkit
import { Provider } from "react-redux";
import { store } from "./store/index.js";
//estilos
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
