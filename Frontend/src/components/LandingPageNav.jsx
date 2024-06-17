import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function LandingPageNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">GAME VAULT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/sell">Sell Your Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingPageNav;
