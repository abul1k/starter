import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// style
import "./styles/index.scss";

// store
import { store } from "./feature/store";

// App
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Suspense fallback="Loading...">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);

// عبدالعزيز
