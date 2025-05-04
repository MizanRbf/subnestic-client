import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
