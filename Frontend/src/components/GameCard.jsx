import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function GameCard({ id, name, image, category, user, price }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" src={image} height="200px" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {category.name} <br />
            Seller name : {user.name}
          </Card.Text>
          <Link to={`/games/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="primary">Details</Button>
          </Link>
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
            onClick={handleShow}
          >
            Purchase
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Price Kshs: {price}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameCard;
