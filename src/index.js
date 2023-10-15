import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";


const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
    </Routes>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  </React.StrictMode>
);
