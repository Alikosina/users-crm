import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "@/entities/auth/ui";

export const appRouter = () =>
  createBrowserRouter([
    {
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
