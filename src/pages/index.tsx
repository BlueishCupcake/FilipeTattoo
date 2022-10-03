import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./home";
import { RecentWorks } from "./works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meus-estilos",
    element: <RecentWorks />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
