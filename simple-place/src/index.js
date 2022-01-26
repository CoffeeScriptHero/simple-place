import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./fonts/Quicksand/Quicksand-Bold.woff";
import "./fonts/Quicksand/Quicksand-Medium.woff";
import "./fonts/Quicksand/Quicksand-Regular.woff";
import "./fonts/Quicksand/Quicksand-SemiBold.woff";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
