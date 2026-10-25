import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "../css/index.css";
import App from "./App.jsx";
import FormularioAcceso from "./FormularioAcceso.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/ingresar"
          element={<FormularioAcceso modo="login" />}
        />

        <Route
          path="/registro"
          element={<FormularioAcceso modo="registro" />}
        />
      </Routes>
    </HashRouter>
  </StrictMode>
);