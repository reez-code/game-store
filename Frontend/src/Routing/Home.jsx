import { useState, useEffect } from "react";
import GameCollection from "../components/GameCollection";
import NavigationBar from "../components/NavigationBar";
import { BASE_URL } from "../../fetch_data";

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
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
  const handleSearch = (search) => {
    setSearch(search);
  };
  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <NavigationBar handleSearch={handleSearch} />
      <GameCollection games={filteredGames} />
    </>
  );
}

export default Home;
