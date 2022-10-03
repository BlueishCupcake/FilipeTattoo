import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import { Home } from "./home";
import { Precautions } from "./precautions";
import { RecentWorks } from "./works";

const Body = styled.div`
  min-height: calc(100vh - 137px);
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/galeria",
    element: <RecentWorks />,
  },
  {
    path: "/cuidados",
    element: <Precautions />,
  },
]);

const Routes = () => (
  <Body>
    <RouterProvider router={router} />
  </Body>
);

export default Routes;
