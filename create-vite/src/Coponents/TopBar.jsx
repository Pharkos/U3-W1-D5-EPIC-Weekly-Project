import logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBar() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Netflix-Clone-Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="collapse navbar-collapse"
        >
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="nav-link active fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link active fw-bold">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link active fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link active fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link active fw-bold">
              My List
            </Nav.Link>

            <Container className="d-flex align-items-center" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
