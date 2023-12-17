/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import CreateAcc from "./page/CreateAcc.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<CreateAcc />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
