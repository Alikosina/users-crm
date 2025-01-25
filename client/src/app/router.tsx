import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { createBrowserRouter } from "react-router";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
