import "../CSS/userGames.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../fetch_data";
function UserGamesForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setCategories(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  const schema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, { message: "Name is required" }),
    phone_number: z
      .string({
        required_error: "Phone Number is required",
      })
      .length(10, { message: "Phone Number should be 10 characters" }),

    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, { message: "Email is required" }),
    game_name: z
      .string({
        required_error: "Game Name is required",
      })
      .min(1, { message: "Game Name is required" }),
    image: z
      .string({
        required_error: "Image is required",
      })
      .min(1, { message: "Image is required" })
      .url({ message: "Enter a valid image url" }),
    price: z
      .string({
        required_error: "Price is required",
      })
      .min(1, { message: "Price is required" }),
    category: z
      .string({
        required_error: "Category is required",
      })
      .min(1, { message: "Category is required" }),
    reviews: z
      .string({
        required_error: "Review is required",
      })
      .min(1, { message: "Review is required" }),
    game_description: z
      .string({
        required_error: "Description is required",
      })
      .min(1, { message: "Description is required" }),
  });

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      game_name: "",
      image: "",
      price: "",
      category: "",
      reviews: "",
      game_description: "",
    },
  });

  const onSumbit = (values) => {
    console.log(values);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSumbit)}>
        <div className="form">
          <span className="heading">Fill the Form </span>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Your Name"
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
                  placeholder="Your Phone Number"
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
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Your Email"
                  id="mail"
                  type="mail"
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
            name="game_name"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Game Name"
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
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Image"
                  type="url"
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
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Price"
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
            name="category"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Form.Select
                  aria-label="Default select example"
                  className="input"
                  {...field}
                >
                  <option>Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>

                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="reviews"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Add a Review"
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
            name="game_description"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <textarea
                  placeholder="Description"
                  rows="10"
                  cols="30"
                  id="message"
                  name="message"
                  className="textarea"
                  {...field}
                ></textarea>
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <div className="button-container">
            <button className="send-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserGamesForm;
