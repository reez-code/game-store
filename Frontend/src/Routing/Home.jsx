import { useState, useEffect } from "react";
import GameCollection from "../components/GameCollection";
import NavigationBar from "../components/NavigationBar";
import { BASE_URL } from "../../fetch_data";

function Home() {
  const [games, setGames] = useState([]);
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
          setGames(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <>
      <NavigationBar />
      <GameCollection games={games} />
    </>
  );
}

export default Home;
