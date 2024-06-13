import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
