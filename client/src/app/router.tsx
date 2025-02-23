import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "@/entities/auth";

export const appRouter = () =>
  createBrowserRouter([
    {
      // TODO: move router paths to @/shared/constants
      path: "/",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
