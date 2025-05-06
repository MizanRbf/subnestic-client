import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import BoxDetails from "../Pages/BoxDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/subscription_box.json"),
        element: <Home></Home>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/boxDetails/:id",
    loader: () => fetch("/subscription_box.json"),
    element: <BoxDetails></BoxDetails>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
