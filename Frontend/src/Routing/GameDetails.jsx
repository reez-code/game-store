import { useEffect, useState } from "react";
import LandingPageNav from "../components/LandingPageNav";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../fetch_data";
import DetailsCollection from "../components/DetailsCollection";

function GameDetails() {
  const params = useParams();
  const [games, setGames] = useState([]);
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          const game_id = data.filter((game) => {
            return game.id == params.id;
          });
          setGames(game_id);
        })
        .catch((err) => console.log(err))
    );
  }, [params.id]);

  useEffect(() => {
    fetch(`${BASE_URL}/purchase`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
          const purchase_id = data.filter((purchase) => {
            return purchase.game.id == params.id;
          });

          setPurchases(purchase_id);
        })
        .catch((err) => console.log(err))
    );
  }, [params.id]);

  return (
    <>
      <LandingPageNav />
      <DetailsCollection games={games} purchases={purchases.length} />
    </>
  );
}

export default GameDetails;
