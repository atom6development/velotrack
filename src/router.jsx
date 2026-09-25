import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PublicOnlyRoute from "@/components/auth/PublicOnlyRoute";
import AppLayout from "@/components/layout/AppLayout";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicOnlyRoute />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Monitoring } = await import("@/pages/Monitoring");
              return { Component: Monitoring };
            },
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
