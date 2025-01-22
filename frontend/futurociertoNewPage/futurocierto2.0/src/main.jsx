import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n.js";

/// PAGES /////
import QuienesSomos from "./components/page/QuienesSomos.jsx";
import MisionYValores from "./components/page/MisionYValores.jsx";
import Educacion from "./components/page/Educacion.jsx";
import Noticias from "./components/page/Noticias.jsx";
import NoticiasDetalles from "./components/page/NoticiasDetalles.jsx";
import EducacionDetalles from "./components/page/EducacionDetalles.jsx";
import { ModalProvider } from "./components/ModalContext .jsx";
import { LanguageProvider } from "./context/LanguageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quienes-somos",
    element: <QuienesSomos />,
  },
  {
    path: "/mision-valores",
    element: <MisionYValores />,
  },
  {
    path: "/educacion",
    element: <Educacion />,
  },
  {
    path: "/educacion/:id",
    element: <EducacionDetalles />,
  },
  {
    path: "/noticias",
    element: <Noticias />,
  },
  {
    path: "/noticias/:id",
    element: <NoticiasDetalles />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </LanguageProvider>
  </React.StrictMode>
);
