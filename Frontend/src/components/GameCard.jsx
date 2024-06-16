import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

function GameCard({ name, image, price }) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" src={image} height="200px" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default GameCard;
