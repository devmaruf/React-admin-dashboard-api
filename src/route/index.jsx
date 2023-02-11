import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./Layout"));
const PrivateOutlet = lazy(() => import("./route/PrivateOutlet"));
const Login = lazy(() => import("./pages/auth/Login"));
const Router = () => {
  const elements = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <PrivateOutlet />,
      children: [{ path: "dashboard", element: <Layout /> }],
    },
  ]);
  return elements;
};

export default Router;
