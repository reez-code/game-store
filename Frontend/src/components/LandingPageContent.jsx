import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
function LandingPageContent() {
  const styling = {
    backgroundColor: "#212529",
  };
  return (
    <>
      <section style={styling} className="section-1">
        <h3 className="h4-landing-page">WELCOME TO THE WORLD OF GAMING</h3>
        <p id="section-1-content">
          We offer you multiple games from multiple genres - <br />
          not only that but you can sell your games on our website{" "}
        </p>
        <NavLink className="button-1" href="/home">
          <span id="button-text">
            <Link
              style={{ textDecoration: "none" }}
              className="link-text"
              to="/home"
            >
              SHOP NOW
            </Link>
          </span>
        </NavLink>
      </section>

      <section className="section-2"></section>
    </>
  );
}

export default LandingPageContent;
