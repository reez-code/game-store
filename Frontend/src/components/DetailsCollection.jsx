import "../CSS/details.css";
import DetailsCard from "./DetailsCard";

function DetailsCollection({ games, purchases }) {
  return (
    <>
      <div className="card mb-3 detail" style={{ maxWidth: "60%" }}>
        <div className="row g-0">
          {games.map((game) => (
            <DetailsCard key={game.id} {...game} purchases={purchases} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailsCollection;
