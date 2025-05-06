import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import BoxDetails from "../Pages/BoxDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/subscription_box.json"),
        hydrateFallbackElement: <Loader></Loader>,
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
    hydrateFallbackElement: <Loader></Loader>,
    element: (
      <PrivateRoute>
        <BoxDetails></BoxDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
