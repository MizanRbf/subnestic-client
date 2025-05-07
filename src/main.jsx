import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
  // </StrictMode>
);
