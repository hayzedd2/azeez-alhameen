import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesList />
      <Analytics/>
    </BrowserRouter>
  </React.StrictMode>
);
