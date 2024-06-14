import "../CSS/userGames.css";
function UserGamesForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-container">
          <div class="form">
            <span class="heading">Fill the Form </span>
            <input placeholder="Your Name" type="text" class="input" />
            <input placeholder="Your Phone Number" type="text" class="input" />
            <input
              placeholder="Your Email"
              id="mail"
              type="mail"
              class="input"
            />
            <input placeholder="Game Name" type="text" class="input" />
            <input placeholder="Image" type="url" class="input" />
            <input placeholder="Price" type="number" class="input" />
            <input placeholder="Add a Review" type="number" class="input" />
            <textarea
              placeholder="Description"
              rows="10"
              cols="30"
              id="message"
              name="message"
              class="textarea"
            ></textarea>
            <div class="button-container">
              <button class="send-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserGamesForm;
