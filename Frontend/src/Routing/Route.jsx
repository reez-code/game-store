import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import UserGames from "./UserGames";
import GameDetails from "./GameDetails";

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
  {
    path: "/games/:id",
    element: <GameDetails />,
  },
]);

export default router;
