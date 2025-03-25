import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StoreProvider from "./context/StoreProvider.jsx";
import ToastProvider from "./context/ToastProvider.jsx";
import { router } from "./Router/Route.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <ToastProvider>
        <RouterProvider router={router}></RouterProvider>
      </ToastProvider>
    </StoreProvider>
  </StrictMode>
);
