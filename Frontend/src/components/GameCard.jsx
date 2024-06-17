import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function GameCard({ id, name, image, category, user }) {
  return (
    <>
      <Link to={`/games/${id}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: "18rem" }} className="mt-5">
          <Card.Img variant="top" src={image} height="200px" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {category.name} <br />
              Seller name : {user.name}
            </Card.Text>
            <Button variant="primary">Purchase</Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default GameCard;
