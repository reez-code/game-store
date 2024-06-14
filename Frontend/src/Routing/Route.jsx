import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import UserGames from "./UserGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sell",
    element: <UserGames />,
  },
]);

export default router;
