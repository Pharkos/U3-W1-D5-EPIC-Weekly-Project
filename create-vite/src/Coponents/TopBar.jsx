import logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function TopBar() {
  return (
    <Navbar data-bs-theme="dark" className="navbarCostum" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Netflix-Clone-Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#home" className="fw-bold">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#shows" className="fw-bold">
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#movies" className="fw-bold">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#recent" className="fw-bold">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#list" className="fw-bold">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center ms-lg-3 gap-3">
            <Nav.Link href="#" aria-label="Search">
              <i className="bi bi-search icons"></i>
            </Nav.Link>

            <div id="kids" className="fw-bold">
              KIDS
            </div>

            <Nav.Link href="#" aria-label="Notifications">
              <i className="bi bi-bell icons"></i>
            </Nav.Link>

            <Nav.Link href="#" aria-label="Profile">
              <i className="bi bi-person-circle icons"></i>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
