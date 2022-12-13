import { Home, Level } from "../pages";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/level",
    element: <Level />
  }
]);

export default router;
