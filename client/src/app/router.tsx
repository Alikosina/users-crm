import { createBrowserRouter } from "react-router";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { ProtectedRoute } from "@/entities/auth";
import { CrmUserPage } from "@/pages/crm-user";
import { APP_ROUTES } from "@/shared/constants";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: APP_ROUTES.Main,
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: APP_ROUTES.CrmUserCreate,
      element: (
        <ProtectedRoute>
          <CrmUserPage />
        </ProtectedRoute>
      ),
    },
    {
      path: APP_ROUTES.CrmUserEdit,
      element: (
        <ProtectedRoute>
          <CrmUserPage />
        </ProtectedRoute>
      ),
    },
    {
      path: APP_ROUTES.Login,
      element: <LoginPage />,
    },
  ]);
