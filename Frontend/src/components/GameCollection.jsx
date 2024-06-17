import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import GameCard from "./GameCard";
function GameCollection({ games }) {
  return (
    <>
      <Row className="g-4">
        {games.map((game) => (
          <Col key={game.id}>
            <GameCard {...game} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GameCollection;
