import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../fetch_data";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function GameCard({ id, name, image, category, user, price }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = z.object({
    game_id: z
      .string({
        required_error: "id is required",
      })
      .length(1, { message: "id is required" }),
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, { message: "Name is required" }),
    phone_number: z
      .string({
        required_error: "Phone Number must be 10 characters",
      })
      .length(10, { message: "Phone Number must be 10 characters" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, { message: "Email is required" }),
  });

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      game_id: "",
      name: "",
      phone_number: "",
      email: "",
    },
  });

  const onSumbit = async (values) => {
    await fetch(`${BASE_URL}/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        game_id: Number(values.game_id),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

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
          <Modal.Title>
            Price Kshs: {price} <br />
            Input Game ID as {id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSumbit)}>
            <Controller
              name="game_id"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    placeholder={`Game ID `}
                    type="text"
                    className="input"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <p className="text-danger">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    placeholder="Name"
                    type="text"
                    className="input"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <p className="text-danger">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="phone_number"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    placeholder="Phone Number"
                    type="number"
                    className="input"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <p className="text-danger">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    className="input"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <p className="text-danger">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Button
              variant="primary"
              type="submit"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Submitting…" : "Submit"}
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ marginLeft: "10px" }}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GameCard;
