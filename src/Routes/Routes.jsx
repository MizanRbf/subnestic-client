import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Components/Loader";
import Testimonials from "../Pages/Testimonials";
import NewsLetter from "../Pages/NewsLetter";
import BoxDetails from "../Components/BoxDetails";
import SubscriptionHistory from "../Pages/SubscriptionHistory";

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
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
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
    path: "/testimonials",
    // loader: () => fetch("/TestimonialsData.json"),
    element: <Testimonials></Testimonials>,
  },
  {
    path: "/newsLetter",
    element: <NewsLetter></NewsLetter>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/orderHistory",
    loader: () => fetch("/subscription_box.json"),
    hydrateFallbackElement: <Loader></Loader>,
    element: (
      <PrivateRoute>
        <SubscriptionHistory></SubscriptionHistory>
      </PrivateRoute>
    ),
  },
]);
