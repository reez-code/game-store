import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import GameCard from "./GameCard";
function GameCollection({ games }) {
  return (
    <>
      <Row className="g-4">
        {games.map((game) => (
          <Col>
            <GameCard {...game} key={game.id} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GameCollection;
