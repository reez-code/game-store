import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
import "../CSS/landingPage.css";

function LandingPageContent() {
  const styling = {
    backgroundColor: "#212529",
  };
  return (
    <>
      <section style={styling} className="section-1">
        <h3 className="h4-landing-page">WELCOME TO THE GAME VAULT</h3>
        <p id="section-1-content">
          We offer multiple games from multiple categories - <br />
          and a place for you to sell your games.
        </p>
        <NavLink className="button-1" href="/home">
          <span id="button-text">
            <p style={{ textDecoration: "none" }} className="link-text">
              SHOP NOW
            </p>
          </span>
        </NavLink>
      </section>
    </>
  );
}

export default LandingPageContent;
